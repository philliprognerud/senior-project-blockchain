import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/landingpage">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="logo"
            />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-primary">
                  <strong>Sign up</strong>
                </button>
                <button className="button is-light">Log in</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
