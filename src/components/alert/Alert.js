import React from 'react';

const Alert = props => {

  return (
    <div className={`alert alert-${props.type}`}>
      <ul>
        {
          props.errors.map((error, key) => <li key={key}>{error}</li>)
        }
      </ul>
    </div>
  );
}

export default Alert;