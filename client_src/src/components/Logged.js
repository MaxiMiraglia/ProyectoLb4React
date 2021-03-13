import React from 'react';

const Logged = (props) => {

  const handleLogout = () => {
    props.history.push('/home');
  }

  return (
    <div>
      <h1>¡Bienvenido usuario!</h1>
      <br></br>
      <button type="button" class="btn btn-primary mb-2" onClick={handleLogout}>Deslogearse</button>
    </div>
  )
}
export default Logged;
