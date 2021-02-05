import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

import Header from "./Component/Header";
import Main from "./Component/Main";

function App() {
  return (
    //const headerRequired = () => setState(!login && signin)
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          {/* Main */}
          <Main />
        </Route>

        <Route path="/" exact />
        {/* Upload */}
        <Route path="/" exact />
        {/* Mypage */}
        <Route path="/" exact />
        {/* Post */}
        <Route path="/" exact />
        {/* Signup */}
        {/* Header */}
      </Switch>
    </Router>
  );
}

export default App;
