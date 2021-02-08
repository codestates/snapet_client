import React from "react";
import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/HomePage/Home";
import TheTeam from "./Component/TeamPage/TheTeam";
import Mypage from "./Component/pages/Mypage/Mypage";
import Id from "./Component/pages/Mypage/id";
import Post from "./Component/pages/Mypage/post";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/theteam" component={TheTeam} />
        {/* <Route>
          <Id />
        </Route> */}
        <Route path="/mypage" component={Mypage} />
      </Switch>
    </Router>
    // component={main}
  );
}

export default App;
