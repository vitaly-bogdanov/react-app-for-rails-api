import React, { Fragment, Component } from 'react';
import NavLinkButton from '../../../components/navLinkButton/NavLinkButton';
import { postsList, postCreator } from '../../../config/routes';
import classes from './admin.module.scss';
import { connect } from 'react-redux';
import { apiLogout } from '../../../config/Api';
import { authorizationCreator } from '../../../redux/actions/actionCreators';
import { withRouter } from 'react-router-dom';
import { getUserFromLocalStorageHelper } from '../../../config/helpers';

class Admin extends Component {

  logout() {
    console.log(getUserFromLocalStorageHelper());
    console.dir(localStorage.user);
    // apiLogout(response => {
    //   //console.log(response);
    //   console.log(this.props);
    //   // сбрасываем user state
    //   //this.props.authorizationAction({name: 'No name', access: 'guest'});
    //   // очищаем localStorage
    //   //localStorage.removeItem('user');
    // }); 
  }
  
  render() {
    return (
      <Fragment>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`collapse navbar-collapse ${classes.navbarFlexbox}`} id="navbarNav">
                <ul className="navbar-nav">
                  <NavLinkButton 
                    name={postsList.name} 
                    exact={postsList.exact} 
                    to={postsList.path} 
                  />
                  <NavLinkButton 
                    name={postCreator.name} 
                    exact={postCreator.exact} 
                    to={postCreator.path} 
                  />
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item text-warning">{this.props.user.name}</li>
                  <li 
                    className={`text-danger ${classes.exitButtonPosition}`}
                    onClick={() => this.logout()}
                  >Выйти</li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main className={classes.main}>
          { this.props.children }
        </main>
        <footer className={classes.footer}>
          <div className="container">
            <h2>footer</h2>
          </div>
        </footer>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authorization.user
});

const mapDispatchProps = dispatch => ({
  authorizationAction: user => dispatch(authorizationCreator(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(Admin));