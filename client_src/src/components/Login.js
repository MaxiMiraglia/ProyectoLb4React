import React, {useState} from 'react';
import axios from 'axios';
import './../styles/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setUserSession } from '../Utils/Common';
const Login = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
  setError(null);
  setLoading(true);
    axios.post("http://localhost:3000/login", {
      username: username,
      password: password
    }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user)
      props.history.push('/logged');
      console.log('response >>> ', response);
    }).catch(error => {
      setLoading(false);
      console.error('error >>> ', error);
    });
  }

  return (
    <div>
      <form>
        <div class="form-group">
          <label for="formGroupExampleInput">Nombre de usuario</label>
          <input type="text" class="form-control" value={username}
            onChange={e => setUsername(e.target.value)} placeholder="Nombre de usuario" required />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Contraseña</label>
          <input type="password" class="form-control" value={password}
            onChange={e => setPassword(e.target.value)} placeholder="Contraseña" required />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="button" value={loading ? "Loading..." : "Login"} disabled={loading}
          class="btn btn-primary mb-2" onClick={handleLogin}>Logearse</button>
      </form>
    </div>
  )
}
//en la parte del botón de Logearse generaba problemas porque el type estaba en "submit",
//y para que funcionase tenía que estar en "button"
export default Login;