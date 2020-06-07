import React, { Component } from 'react';
import Client from '../../../layouts/client/Client';
import RegistrationFormContainer from '../../../../components/registrationForm/RegistrationFormContainer';
import { registration } from '../../../../config/routes';

class Registration extends Component {
  
  render() {

    return (
      <section>
        <div className="container">
          <h1>{registration.name}</h1>
          <RegistrationFormContainer />
        </div>
      </section>
    )
  }
}

export default Registration;