import React from 'react';
import RegistrationForm from './RegistrationForm';
import axios from 'axios';
import { authorizationCreator } from '../../redux/actions/actionCreators';
import { connect } from 'react-redux';

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
    <RegistrationForm 
      registration={registrationHandler}
      authorizationAction={props.authorizationAction}
    />
  );
}

const mapDispatchToProps = dispatch => ({
  authorizationAction: user => dispatch(authorizationCreator(user))
});

export default connect(null, mapDispatchToProps)(RegistrationFormContainer);