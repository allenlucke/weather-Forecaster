import React, { Component } from 'react';
import './App.css';
//React-Router
import { HashRouter as Router, Route } from 'react-router-dom';
import HomePage from './../pages/HomePage/HomePage';
import Details from './../pages/Details/Details';
import Edit from './../pages/Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <h1>Movie Sagas</h1>
        <Route path="/" exact component={HomePage} />
        <Route path='/details/' component={Details} />
        <Route path='/edit/' component={Edit} />
      </div>
      </Router>
    );
  }
}
export default App;
