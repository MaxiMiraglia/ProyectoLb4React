import React, { Component } from 'react';
import kuuruma from './../assets/kuuruma.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/Navbar.css';
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper navbar navbar-expand-lg">
            <a href="Home" className="brand-logo center img-fluid"> <img src={kuuruma} alt="logo" /></a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="Home">Inicio</a></li>
              <li><a href="Login">Login</a></li>
              <li><a href="Registro">Registrarse</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;