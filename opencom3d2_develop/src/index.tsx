import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menus from "./Menus/Menus";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Menus}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
