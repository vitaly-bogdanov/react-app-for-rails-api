import React, { Component, Fragment } from 'react';
import NavLinkButton from '../../../components/navLinkButton/NavLinkButton';
import { home, posts, registration, authentication, postsList } from '../../../config/routes';
import classes from './client.module.scss';
import { connect } from 'react-redux';

class Client extends Component {

  render() {
    return (
      <Fragment>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <NavLinkButton name={home.name} exact={home.exact} to={home.path} />
                  <NavLinkButton name={posts.name} exact={posts.exact} to={posts.path} />
                </ul>
              </div>
              <ul className="navbar-nav justify-content-end">
                {
                  this.props.user.access === 'guest' ? (
                    <Fragment>
                      <NavLinkButton name={registration.name} exact={registration.exact} to={registration.path} />
                      <NavLinkButton name={authentication.name} exact={authentication.exact} to={authentication.path} />
                    </Fragment>
                  ) : (
                    <NavLinkButton name={`Админ панель (${this.props.user.name})`} exact={postsList.exact} to={postsList.path} />
                  )
                }
              </ul>
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

export default connect(mapStateToProps)(Client);