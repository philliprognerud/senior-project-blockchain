import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/landingpage">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="logo"
            />
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <button class="button is-primary">
                  <strong>Sign up</strong>
                </button>
                <button class="button is-light">Log in</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
