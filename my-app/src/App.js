import React from "react";
import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/HomePage/Home";
import TheTeam from "./Component/TeamPage/TheTeam";
// import Mypage from "./Component/pages/Mypage/Mypage";
import aboutme from "./Component/pages/Mypage/Aboutme";
import Upload from "./Component/pages/Upload.js";
import Auth from "./Component/Auth/Auth";
import Feed from "./Component/pages/Feed";
import Post from "./Component/pages/Mypage/Posts";

// import { useStateValue } from "./Component/StateProvider";

function App() {
  // const[{user }, dispatch ] = useStateValue()
  //   const [tocken, setTocken] = useState();

  //   if (!tocken) {
  //     return <Auth setTocken={setTocken} />
  //   }
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/theteam" component={TheTeam} />
        <Route path="/mypage/posts" component={Post} />
        <Route path="/mypage/about" component={aboutme} />
        <Route path="/upload" component={Upload} />
        <Route path="/signin" component={Auth} />
        <Route path="/feed" component={Feed} />
      </Switch>
    </Router>
  );
}

export default App;
