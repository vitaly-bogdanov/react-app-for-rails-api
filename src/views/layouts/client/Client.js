import React, { Component, Fragment } from 'react';
import NavLinkButton from '../../../components/navLinkButton/NavLinkButton';
import { home, posts } from '../../../config/routes';
import classes from './client.module.scss';

class Client extends Component {

  render() {

    return (
      <Fragment>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
              <a className="navbar-brand" href="#">Navbar</a>
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
                <li className="nav-item">
                  <NavLinkButton name={home.name} exact={home.exact} to={home.path} />
                </li>
                <li className="nav-item">
                  <NavLinkButton name={home.name} exact={home.exact} to={home.path} />
                </li>
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

export default Client;