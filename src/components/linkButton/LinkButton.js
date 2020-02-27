import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = props => (
  <Link 
    to={props.to} 
    exact={props.exact}
    className={`btn btn-${props.type}`}
  >{props.name}</Link>
);

export default LinkButton;