import React from "react";
import ReactDOM from "react-dom/client";
//主题
import { ConfigProvider } from "antd";
//页面
import { Switch, Route, HashRouter } from 'react-router-dom';
import MenuUI from "./Menu/MenuUI";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>

    <ConfigProvider theme={{
      // token: {
      //   colorPrimary: '#00b96b',
      // },
      // algorithm: theme.defaultAlgorithm
    }}>

      <HashRouter>
        <Switch>
          <Route path="/" component={MenuUI}></Route>
        </Switch>
      </HashRouter>

    </ConfigProvider>

  </React.StrictMode>
);
