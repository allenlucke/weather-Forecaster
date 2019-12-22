import React, { Component } from 'react';
import './App.css';
//Redux
// import {connect} from 'react-redux';
// import mapStoreToProps from '../../redux/mapStoreToProps';
//React-Router
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './../pages/HomePage/HomePage';
import Details from './../pages/Details/Details';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <h1>Movie Sagas</h1>
        <Route path="/" exact component={HomePage} />
        <Route path='/details/' component={Details} />
      </div>

      </Router>
    );
  }
}

export default App;
