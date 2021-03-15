import React from 'react';
import { getUser, removeUserSession } from '../Utils/Common';

const Logged = (props) => {

  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    props.history.push('/home');
  }

  return (
    <div>
      <h1>¡Bienvenido usuario{user.username}!</h1>
      <br></br>
      <button type="button" className="btn btn-primary mb-2" onClick={handleLogout}>Deslogearse</button>
    </div>
  )
}

//Chequear la parte de {user.username} porque no esta trayendo el nombre del usuario desde el JSON
//Hay que traer ese value del JSON de alguna forma
export default Logged;
