import React from 'react';
import * as routes from './routes';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Error404 from '../views/errors/404/Error404';

const AppRouting = props => {
  return (
    <Switch>
      {
        Object.keys(routes).map((value, key) => {
          return routes[value].access[props.access] ?
            (<Route 
                key={key} 
                path={routes[value].path} 
                exact={routes[value].exact}
                component={routes[value].component}
            />) : null
        })
      }

      <Route 
        path="/404"
        component={Error404} 
      />
      <Redirect to="/404" />
    </Switch>
  );
}

const mapStateToProps = state => ({
  access: state.authorization.user.access
});

export default connect(mapStateToProps)(AppRouting);