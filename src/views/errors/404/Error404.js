import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { home } from '../../../config/routes';
import { connect } from 'react-redux';


class Error404 extends Component {

  render() {
    return (
      <Fragment>
        <div className="container">
          <h1>404</h1>
          <Link to={home.path}>{home.name}</Link>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authorization.user
});

export default connect(mapStateToProps)(Error404);