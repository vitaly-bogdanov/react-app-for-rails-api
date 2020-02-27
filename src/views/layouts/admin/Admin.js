import React, { Fragment, Component } from 'react';
import NavLinkButton from '../../../components/navLinkButton/NavLinkButton';
import { 
  postsList, 
  postCreator
} from '../../../config/routes';
import classes from './admin.module.scss';

class Admin extends Component {
  
  render() {

    return (
      <Fragment>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
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

export default Admin;