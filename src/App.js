import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loggedInThunk  } from './redux/middlewares';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as routes from './config/routes';

class App extends Component {

  componentDidMount() {
    this.props.loggedIn();
  }

  render() {
    return (
      <Switch>
        {
          Object.values(routes).map((route, key) => {
            return route.access[this.props.access] ?
              (<Route 
                  key={key} 
                  path={route.path} 
                  exact={route.exact}
                  component={route.component}
              />) : null
          })
        }
        <Redirect to="/404" />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  access: state.authorization.user.access
});

const mapDispatchToProps = dispatch => ({
  loggedIn: () => dispatch(loggedInThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);