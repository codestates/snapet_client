import React from "react";
import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/HomePage/Home";
<<<<<<< HEAD
import Auth from "./Component/Auth/Auth";
import TheTeam from "./Component/TeamPage/TheTeam";
import Post from "./Component/pages/Mypage/Posts";
import Aboutme from "./Component/pages/Mypage/Aboutme";
=======
import Auth from './Component/Auth/Auth';
import TheTeam from "./Component/TeamPage/TheTeam";
import Mypage from "./Component/pages/Mypage/Mypage";
import aboutme from "./Component/pages/Mypage/aboutme";
>>>>>>> 621681da8dd5fa8a90287c873826f0c5c6dc95db
// import { useStateValue } from "./Component/StateProvider";

function App() {
  // const[{user }, dispatch ] = useStateValue()
  //   const [tocken, setTocken] = useState();
<<<<<<< HEAD
=======

>>>>>>> 621681da8dd5fa8a90287c873826f0c5c6dc95db

  //   if (!tocken) {
  //     return <Auth setTocken={setTocken} />
  //   }
  return (
    
    <Router>
<<<<<<< HEAD
      <Route path="/signin" component={Auth} />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/theteam" component={TheTeam} />

        <Route path="/mypage/posts" component={Post} />
        <Route path="/mypage/about" component={Aboutme} />
=======
      <Route path='/signin' component={Auth} /> 
              <Header />
      <Switch>
        <Route path='/' exact component={Home} /> 
        <Route path='/theteam' component={TheTeam} />
        <Route path='/mypage/posts' component={Mypage} />
        <Route path='/mypage/about' component={aboutme} />

>>>>>>> 621681da8dd5fa8a90287c873826f0c5c6dc95db
      </Switch>
      
    </Router>
  );
}

export default App;
