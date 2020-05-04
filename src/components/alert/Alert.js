import React from 'react';
import PropTypes from 'prop-types';

const Alert = props => (
  <div className={`alert alert-${props.type}`}>
    <ul>
      {
        props.errors.map((error, key) => <li key={key}>{error}</li>)
      }
    </ul>
  </div>
);

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Alert;