import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Note from "../../pages/Note";
import Notes from "../../pages/Notes";
import AppRoute from "../../router/router";

const Layout = () => {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
};

export default Layout;
