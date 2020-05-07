import React from 'react';
import { Field, ErrorMessage } from 'formik'; 
import PropTypes from 'prop-types';

const TextInput = props => {

  let fieldClasses = ['form-control', 'warning', props.validateClass];

  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.name}</label>
      <Field 
        name={props.name} 
        id={props.name}
        validate={props.validate} 
        type={props.type || "text"}
        className={fieldClasses.join(' ')}
      />
      <small className='invalid-feedback'>
        <ErrorMessage 
          name={props.name}
        />
      </small>
    </div>
  );
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  validate: PropTypes.func
}

export default TextInput;