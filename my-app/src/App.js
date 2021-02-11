import React from "react";
import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/HomePage/Home";

import TheTeam from "./Component/TeamPage/TheTeam";
import Post from "./Component/pages/Mypage/Posts";
import Auth from "./Component/Auth/Auth";
import aboutme from "./Component/pages/Mypage/Aboutme";
import feed from "./Component/pages/Feed";
// import { useStateValue } from "./Component/StateProvider";

function App() {
  // const[{user }, dispatch ] = useStateValue()
  //   const [tocken, setTocken] = useState();

  //   if (!tocken) {
  //     return <Auth setTocken={setTocken} />
  //   }
  return (
    <Router>
      <Route path="/signin" component={Auth} />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/theteam" component={TheTeam} />
        <Route path="/mypage/posts" component={Post} />
        <Route path="/mypage/about" component={Aboutme} />
        <Route path="/feed" component={Feed} />
      </Switch>
    </Router>
  );
}

export default App;
