import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './App.css';
//React-Router
import { HashRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
    this.props.dispatch({
        type: 'GET_FORECAST'
    })
  }
  render() {
    const forecast = this.props.store.getForecastReducer
    console.log(forecast)
    return (
      <Router>
      <div className="App">
        <h1>Weather Forecast</h1>
      </div>
      </Router>
    );
  }
}
export default connect(mapStoreToProps)(App);
