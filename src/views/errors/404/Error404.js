import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { home } from '../../../config/routes';

class Error404 extends Component {

  render() {

    console.log('hhhvvgvh');

    return (
      <Fragment>
        <div className="container">
          <h1>404</h1>
          <Link to={home.path} exact={home.exact}>{home.name}</Link>
        </div>
      </Fragment>
    );
  }
}

export default Error404;