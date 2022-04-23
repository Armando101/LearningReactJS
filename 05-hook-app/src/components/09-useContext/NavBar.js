import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="nav">
      <NavLink exact activeClassName="active" className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="active" className="nav-link" to="/about">
        About
      </NavLink>
      <NavLink exact activeClassName="active" className="nav-link" to="/login">
        Login
      </NavLink>
    </nav>
  );
};
