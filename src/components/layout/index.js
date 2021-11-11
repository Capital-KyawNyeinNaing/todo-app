import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppRoute from "../../router/router";

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="container dark">
        <div className="app">
          <AppRoute />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
