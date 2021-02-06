import React from 'react'
import './App.css';
import Header from './Component/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Component/HomePage/Home'
import TheTeam from './Component/TeamPage/Team'



function App() {
  return (
    <Router >
      <Header />
      <Switch>
        <Route path='/' exact component={Home} /> 
        <Route path='/theteam' component={TheTeam} />
      </Switch>
    </Router>
    // component={main}
  );
}

export default App;
