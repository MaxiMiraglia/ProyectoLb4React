import React from 'react';
import { getUser, getId, removeUserSession } from '../Utils/Common';
const Logged = (props) => {

  const handleLogout = () => {
    removeUserSession();
    props.history.push('/home');
  }
  const gotoUserInfo = () => {
    props.history.push('/userInfo');
  }
  return (
    <div>
      <h1>¡Bienvenido/a {getUser()}!</h1>
      <br></br>
      <h2>Su ID es: {getId()}</h2>
      <br></br>
      <button 
      type="button" 
      className="btn btn-primary mb-2" 
      onClick={gotoUserInfo}>Ver info</button>
      <br></br>
      <button 
      type="button" 
      className="btn btn-primary mb-2" 
      onClick={handleLogout}>Deslogearse</button>
    </div>
  )
}

export default Logged;