import React from 'react';
import AuthorizationForm from './AuthorizationForm';
import { authorizationCreator } from '../../redux/actions/actionCreators';
import { connect } from 'react-redux';
import { apiLogin } from '../../config/Api';
import { loggedInLocalStorageHelper } from '../../config/helpers';
import { withRouter } from 'react-router-dom';
import { postsList } from '../../config/routes';

const AuthorizationFormContainer = props => {

  const authorizationHandler = async values => {
    let formData = {
      name: values.name.trim().toLowerCase(),
      password: values.password.trim()
    };
    return await apiLogin(formData, response => {
      props.authorizationAction(response.data.user); // внести данные в state
      loggedInLocalStorageHelper(response.data.user); // внести данные в localStorage
      props.history.push(postsList.path); // переходим в админку
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

export default withRouter(connect(null, mapDispatchToProps)(AuthorizationFormContainer));