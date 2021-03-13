import axios from 'axios';
import React, { Component } from 'react';
import './../styles/Registro.css';

//falta crear alert para avisar si la cuenta se registró exitosamente

class Registro extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      nombre: '',
      apellido: '',
      email: '',
      password: '',
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios
      .post('http://localhost:3000/personas', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { username, nombre, apellido, email, password} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>

          <div className="form-group col-md-6">
            <label>Nombre de usuario</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.changeHandler}
              required
            />
          </div>

            <div className="form-group col-md-6">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={nombre}
                onChange={this.changeHandler}
                required
              />
            </div>

          <div className="form-group col-md-6">
            <label>Apellido</label>
            <input
              type="text"
              name="apellido"
              value={apellido}
              onChange={this.changeHandler}
              required
            />
          </div>

          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.changeHandler}
              required
            />
          </div>

          <div className="form-group col-md-6">
            <label for="inputPassword4">Contraseña</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.changeHandler}
              required
            />
          </div>

          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" for="gridCheck" />
            </div>
            <button type="submit" className="btn btn-primary">Registrarse</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Registro;
