import React from 'react';
import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <section className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-size-1">Higher Order Components</h1>
          <h2 className="subtitle is-size-3">A few examples how to use HOCs</h2>
        </div>
      </div>
      <div className="hero-foot has-text-centered">
        <nav className="navbar-menu">
          <div className="container navbar-start ">
            <NavLink className="navbar-item" exact activeClassName="is-active" to="/fetching-data">
              Fetch Data
            </NavLink>
            <NavLink className="navbar-item" exact activeClassName="is-active" to="/decorator">
              Decorator
            </NavLink>
            <NavLink className="navbar-item" exact activeClassName="is-active" to="/share-functionality">
              Share Functionality
            </NavLink>
            <NavLink className="navbar-item" exact activeClassName="is-active" to="/connect-hocs">
              Connect hocs
            </NavLink>
          </div>
        </nav>
      </div>
    </section>
  );
}
export default Header;
