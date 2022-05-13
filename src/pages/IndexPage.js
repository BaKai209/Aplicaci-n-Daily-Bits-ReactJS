import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

function IndexPage() {

  const NavLinkOpt = styled.div`
  
  `


  return (
    <div>
      <h1>Practica tus conocimientos en la categoria que prefieres</h1>
      <NavLink exact to="/questionHTML">
        HTML
      </NavLink>
      <NavLink exact to="/questionCSS">
        CSS
      </NavLink>
      <NavLink exact to="/questionJS">
        JS
      </NavLink>
    </div>
  );
}

export default IndexPage;
