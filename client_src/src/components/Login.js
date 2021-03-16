import React, {useState} from 'react';
import axios from 'axios';
import './../styles/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Popup from "reactjs-popup";
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
      setUserSession(response.data.token, response.data.user);
      props.history.push('/logged');
    }).catch(error => {
      setLoading(false);
      if(error.response.status === 401 || error.response.status === 400){
        //setError(error.response.data.message); <-- debería mostrar el error que trae de la API pero no funciona
        console.log("Error de codigo 401 o 400"); // <-- muestra en consola que se llegó al catch de un error 400/401
        alert("Usuario o contraseña incorrectos"); // <-- muestra un popup que indica un error en el inicio de sesión
      }
      else{
        setError("Algo salió mal. Intenta de nuevo");
      }
    });
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Nombre de usuario</label>
          <input type="text" className="form-control" value={username}
            onChange={e => setUsername(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Contraseña</label>
          <input type="password" className="form-control" value={password}
            onChange={e => setPassword(e.target.value)} required />
        </div>
        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
        <button type="button" value={loading ? "Loading..." : "Login"} disabled={loading}
          className="btn btn-primary mb-2" onClick={handleLogin}>Logearse</button>
      </form>
    </div>
  )
}
//en la parte del botón de Logearse generaba problemas porque el type estaba en "submit",
//y para que funcionase tenía que estar en "button"

//el error no se muestra
export default Login;