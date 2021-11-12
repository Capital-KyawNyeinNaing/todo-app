import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "../../router/router";
import Header from "./Header";

const Layout = () => {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <AppRoute />
        </div>
      </div>
    </Router>
  );
};

export default Layout;
