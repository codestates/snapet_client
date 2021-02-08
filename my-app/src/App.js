import React from "react";
import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/HomePage/Home";
import Auth from './Component/Auth/Auth';
import TheTeam from "./Component/TeamPage/TheTeam";
import Mypage from "./Component/pages/Mypage/Mypage";
import Id from "./Component/pages/Mypage/id";


  function App() {
    // const [tocken, setTocken] = useState();
    
    // if (!tocken) {
    //   return <Auth setTocken={setTocken} />
    // }

  return (
    <Router>
      <Header />

      <Switch>
        <Route path='/' exact component={Home} /> 
        <Route path='/theteam' component={TheTeam} />
        <Route path='/signin' component={Auth} />
      </Switch>
    </Router>
    // component={main}
  );
}

export default App;
