import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import FrontPage from "./pages/FrontPage.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" component={Navbar} />
            <Route path="/landingpage" component={FrontPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
