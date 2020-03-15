import React from 'react';
import RegistrationForm from './RegistrationForm';
import axios from 'axios';

const RegistrationFormContainer = props => {
  
  const registration = async values => {
    try {
      let response = await axios.post('', {

      });

      return {};
    } catch(error) {

      return {};
    }
  }

  return (
    <RegistrationForm />
  );
}

export default RegistrationFormContainer;