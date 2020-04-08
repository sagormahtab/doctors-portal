import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Appointment from './components/Appointment/Appointment';

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Switch>
            <Route exact path="/">
              <Header />
            </Route>
            <Route path="/appointment">
              <Appointment />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
