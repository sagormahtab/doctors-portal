import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Appointment from './components/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
            <Route exact path="/">
              <Header />
            </Route>
            <Route path="/appointment">
              <Appointment />
            </Route>
            <Route path="/doctor/dashboard">
              <Dashboard />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
