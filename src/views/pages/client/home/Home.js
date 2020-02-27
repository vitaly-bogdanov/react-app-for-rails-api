import React from 'react';
import Client from '../../../layouts/client/Client';
import { home } from '../../../../config/routes';
// import { withRouter } from 'react-router-dom';

class Home extends React.Component {
  
  render() {
    return (
      <Client>
        <section>
          <div className="container">
            <h1>{home.name}</h1>
          </div>
        </section>
      </Client>
    );
  }
}

export default Home;