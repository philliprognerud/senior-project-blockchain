import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" component={Navbar} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
