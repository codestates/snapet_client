import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./common.css";

import Header from "./pages/Header";
import Main from "./pages/Main";
import Upload from "./pages/Upload";

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

        <Route component={Upload} path="/Upload" exact />
        {/* Upload */}
        {/* <Route path="/" exact />? */}
        {/* Mypage */}
        {/* <Route path="/" exact />
        Post */}
        {/* <Route path="/" exact /> */}
        {/* Signup */}
        {/* Header */}
      </Switch>
    </Router>
  );
}

export default App;
