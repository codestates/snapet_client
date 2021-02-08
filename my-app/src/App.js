import React, { useState }from 'react'
import './App.css';
import Header from './Component/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Component/HomePage/Home'
import TheTeam from './Component/TeamPage/Team'
import Auth from './Component/Auth/Auth'




  function App() {
    // const [tocken, setTocken] = useState();
    
    // if (!tocken) {
    //   return <Auth setTocken={setTocken} />
    // }

  return (
    <Router >
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
