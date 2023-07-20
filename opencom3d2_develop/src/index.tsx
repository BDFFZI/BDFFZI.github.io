import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Game from "./Game";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/Game" component={Game} ></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
