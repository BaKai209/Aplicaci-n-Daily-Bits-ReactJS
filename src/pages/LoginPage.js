import React from "react";
import {  NavLink } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Correo</label>
        <input type="email" required></input>
        <label>Pass</label>
        <input type="password" required></input>
        <NavLink exact to="/">
          Login
        </NavLink>
      </form>
    </div>
  );
}

export default LoginPage;
