import React from 'react';
import Client from '../../../layouts/client/Client';
import { home } from '../../../../config/routes';
// import { withRouter } from 'react-router-dom';

class Home extends React.Component {
  
  render() {
    return (
      <section>
        <div className="container">
          <h1>{home.name}</h1>
        </div>
      </section>
    );
  }
}

export default Home;