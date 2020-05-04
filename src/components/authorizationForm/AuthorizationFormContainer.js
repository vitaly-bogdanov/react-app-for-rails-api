import React from 'react';
import AuthorizationForm from './AuthorizationForm';
import { authorizationCreator } from '../../redux/actions/actionCreators';
import { connect } from 'react-redux';
import { apiLogin } from '../../config/Api';
import { loggedInLocalStorageHalper } from '../../config/helpers';

const AuthorizationFormContainer = props => {

  const authorizationHandler = async values => {
    let formData = {
      name: values.name.trim().toLowerCase(),
      password: values.password.trim()
    };
    return await apiLogin(formData, response => {
      props.authorizationAction(response.data.user); // внести данные в state
      loggedInLocalStorageHalper(response.data.user); // внести данные в localStorage
    });
  }

  return (
    <AuthorizationForm 
      authorization={authorizationHandler}
    />
  );
}

const mapDispatchToProps = dispatch => ({
  authorizationAction: user => dispatch(authorizationCreator(user))
});

export default connect(null, mapDispatchToProps)(AuthorizationFormContainer);