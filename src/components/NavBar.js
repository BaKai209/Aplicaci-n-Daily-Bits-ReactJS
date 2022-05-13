import React, { Component } from "react";
import {  NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div>
            <div>
              <NavLink exact to="/">
                Inicio
              </NavLink>
              <NavLink exact to="/statistics">
                Estadisticas
              </NavLink>
              <NavLink exact to="/login">
                Login
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
