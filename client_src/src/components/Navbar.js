import React, { Component } from 'react';
import reactback from './../assets/reactback.png';
import './../styles/Navbar.css';
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper">

            <a href="Home" class="brand-logo center"> <img src={reactback} alt="logo" /></a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
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