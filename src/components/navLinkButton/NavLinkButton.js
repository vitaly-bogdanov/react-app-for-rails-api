import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkButton = props => (
  <li className="nav-item">
    <NavLink 
      className="nav-link" 
      activeClassName="active"
      to={props.to}
      exact={props.exact}
    >
      { props.name }
    </NavLink>
  </li>
);

export default NavLinkButton;