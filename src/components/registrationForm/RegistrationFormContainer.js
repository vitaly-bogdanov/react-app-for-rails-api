import React from 'react';
import RegistrationForm from './RegistrationForm';
import { authorizationCreator } from '../../redux/actions/actionCreators';
import { connect } from 'react-redux';
import { loggedInLocalStorageHalper } from '../../config/helpers';
import { apiRegistration } from '../../config/Api';
import { withRouter } from 'react-router-dom';
import { postsList } from '../../config/routes';

const RegistrationFormContainer = props => {
  
  const registrationHandler = async values => {
    let formData = {
      name: values.name.trim().toLowerCase(),
      password: values.password.trim(),
      passwordConfirmation: values.passwordConfirmation.trim()
    };
    return await apiRegistration(formData, response => {
      props.authorizationAction(response.data.user);
      loggedInLocalStorageHalper(response.data.user);
      props.history.push(postsList.path);
    });
  }

  return (
    <RegistrationForm 
      registration={registrationHandler}
    />
  );
}

const mapDispatchToProps = dispatch => ({
  authorizationAction: user => dispatch(authorizationCreator(user))
});

export default withRouter(connect(null, mapDispatchToProps)(RegistrationFormContainer));