import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.css";
import "assets/css/demo.css";

import indexRoutes from "./routes/index.jsx";
import LandingPage from "./pages/LandingPage.js";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        if(prop.path === "/"){
          return <Route exact path={prop.path} key={key} component={prop.component} />;
        } else {
          return <Route path={prop.path} key={key} component={prop.component} />;
        }

      })}
      <Route path="/landing" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
