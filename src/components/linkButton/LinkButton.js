import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LinkButton = props => (
  <Link 
    to={props.to} 
    className={`btn btn-${props.type}`}
  >{props.name}</Link>
);

LinkButton.propTypes = {
  type: PropTypes.string.isRequired
}

export default LinkButton;