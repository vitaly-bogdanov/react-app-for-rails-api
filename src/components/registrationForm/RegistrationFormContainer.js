import React from 'react';
import RegistrationForm from './RegistrationForm';
import axios from 'axios';

const RegistrationFormContainer = props => {
  
  const registrationHandler = async values => {
    let data = {
      name: values.name.trim().toLowerCase(),
      password: values.password.trim(),
      passwordConfirmation: values.passwordConfirmation.trim()
    };
    try {
      let response = await axios.post('http://localhost:3001/registrations', {
        registrations: { ...data }
      });
      return {status: response.status};
    } catch(error) {
      return {status: error.response.status, errors: error.response.data.errors};
    }
  }

  return (
    <RegistrationForm registration={registrationHandler} />
  );
}

export default RegistrationFormContainer;