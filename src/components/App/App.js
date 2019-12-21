import React, { Component } from 'react';
import './App.css';
//Redux
import {connect} from 'react-redux';
//React-Router
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './HomePage/HomePage';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <h1>Movie Sagas</h1>
        <HomePage />
      </div>

      </Router>
    );
  }
}

export default App;
