import React from "react";
import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/HomePage/Home";
import TheTeam from "./Component/TeamPage/TheTeam";
import Mypage from "./Component/pages/Mypage/Mypage";

import Id from "./Component/pages/Mypage/id";
import Post from "./Component/pages/Mypage/post";

import Auth from "./Component/Auth/Auth";

function App() {
  // const [tocken, setTocken] = useState();

  // if (!tocken) {
  //   return <Auth setTocken={setTocken} />
  // }

  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/theteam" component={TheTeam} />
        <Route path="/signin" component={Auth} />
        <Route path="/mypage" component={Mypage} />
      </Switch>
    </Router>
  );
}

export default App;
