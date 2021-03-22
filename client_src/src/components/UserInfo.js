import React, { Component } from 'react';
import axios from 'axios';
import {getId} from '../Utils/Common';
import './../styles/UserInfo.css';

class UserInfo extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      userData: [] //aca se guardan los datos del usuario 
    }
  }
  

componentDidMount() {
  const url = `http://localhost:3000/personas/`+getId();
  axios.get(url)
  .then(response => response.data)
  .then((data) => {
    this.setState({ userData: data })
    console.log(this.state.userData)
   })
}
  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item"><span>Nombre de usuario:</span> {this.state.userData.username}</li>
          <li className="list-group-item"><span>Nombre:</span> {this.state.userData.nombre}</li>
          <li className="list-group-item"><span>Apellido:</span> {this.state.userData.apellido}</li>
          <li className="list-group-item"><span>Email:</span> {this.state.userData.email}</li>
        </ul>
        <br></br>
        <a href="/Logged"><button className="btn btn-primary mb-2">Volver</button></a>
      </div>
    )
  }
}

export default UserInfo;

/* {this.state.userData.split('').map(
          (user) => (
          <div classNameName="card">
           <div classNameName="card-body">
              <h5 classNameName="card-title">{user.nombre}</h5>
              <h5 classNameName="card-title">{user.apellido}</h5>
              <h6 classNameName="card-subtitle">{user.email}</h6>
            </div>
          </div>)
          )}
*/

/*<li>
          {this.state.userData.map(user => {
            return (
              <div>
                {user.nombre}
                <br></br>
                {user.apellido}
              </div>
            );
          })}*/