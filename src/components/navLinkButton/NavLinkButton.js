import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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

NavLinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}

export default NavLinkButton;