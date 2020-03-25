import React from 'react';
import axios from 'axios';
import AuthorizationForm from './AuthorizationForm';

const AuthorizationFormContainer = props => {

  const authorizationHandler = async values => {
    let data = {
      name: values.name.trim().toLowerCase(),
      password: values.password.trim()
    };
    try {
      let response = await axios.post('http://localhost:3001/authorization', {
        authorization: { ...data }
      });
      return {status: response.status};
    } catch(error) {
      return {status: error.response.status, errors: error.response.data.errors};
    }
  }

  return (
    <AuthorizationForm authorization={authorizationHandler} />
  );
}

export default AuthorizationFormContainer;