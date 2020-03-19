import React, { Component } from 'react';
import Client from '../../../layouts/client/Client';
import AuthorizationFormContainer from '../../../../components/authorizationForm/AuthorizationFormContainer';
import { authentication } from '../../../../config/routes';

class Authentication extends Component {
  
  render() {
    return (
      <Client>
          <section>
            <div className="container">
              <h1>{authentication.name}</h1>
              <AuthorizationFormContainer />
            </div>
          </section>
      </Client>
    );
  }
}

export default Authentication;