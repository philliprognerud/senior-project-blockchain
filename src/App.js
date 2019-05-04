import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import FrontPage from "./pages/FrontPage.js";
import LandingPage from "./pages/LandingPage.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/frontpage" component={FrontPage} />
            <Route path="/landing" component={LandingPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
