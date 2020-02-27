import React from 'react';
import { Field, ErrorMessage } from 'formik'; 

const TextInput = props => {

  let fieldClasses = ['form-control', 'warning', props.validateClass];

  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.name}</label>
      <Field 
        name={props.name} 
        id={props.name}
        validate={props.validate} 
        type="text"
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

export default TextInput;