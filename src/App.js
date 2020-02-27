import React, { Component } from 'react';
import AppRouting from './config/AppRouting';
import { connect } from 'react-redux';
import { getPostThunk } from './redux/middlewares';

class App extends Component {

  componentDidMount() {
    this.props.getPost();
  }

  render() {

    return (
      <AppRouting />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPost: () => dispatch(getPostThunk())
});

export default connect(null, mapDispatchToProps)(App);
