import React from 'react'
import './App.css';
import Header from './Component/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Component/HomePage/Home'



function App() {
  return (
    <Router >
      <Header />
      <Switch>
        <Route path='/' exact component={Home} /> 
      </Switch>
    </Router>
    // component={main}
  );
}

export default App;
