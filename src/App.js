import React, { Component } from 'react';
import AppRouting from './config/AppRouting';
import { connect } from 'react-redux';
import { loggedInThunk, getPostsThunk } from './redux/middlewares';

class App extends Component {

  componentDidMount() {
    this.props.loggedIn();
  }

  render() {
    return (
      <AppRouting />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loggedIn: () => dispatch(loggedInThunk()),
  getPosts: () => dispatch(getPostsThunk())
});

export default connect(null, mapDispatchToProps)(App);