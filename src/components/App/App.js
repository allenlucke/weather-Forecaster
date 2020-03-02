import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './App.css';
import moment from 'moment';
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
    const forecast = this.props.store.getForecastReducer.map((item, index) => {
      return(
          <tbody key={index}>
              <tr>
                  <td>{moment(item.Date).format('LL')}</td>
                  <td>{item.Temperature.Minimum.Value}{item.Temperature.Minimum.Unit}</td>
                  <td>{item.Temperature.Maximum.Value}{item.Temperature.Maximum.Unit}</td>
                  <td>{item.Day.PrecipitationIntensity}{item.Day.PrecipitationType}</td>
                  <td>{item.Night.PrecipitationIntensity}{item.Night.PrecipitationType}</td>
              </tr>
          </tbody>
      )
  })
    console.log(forecast)
    return (
      <Router>
      <div className="App">
        <h1>Weather Forecast</h1>
        <h2>Up-To-Date 5 Day Forecast in Kansas City</h2>
          <table>
              <thead>
                  <tr>
                      <th>Date</th>
                      <th>Minimum Temperature</th>
                      <th>MaximumTemperature</th>
                      <th>Day</th>
                      <th>Night</th>
                  </tr>
              </thead>
                  {forecast}
          </table>
      </div>
      </Router>
    );
  }
}
export default connect(mapStoreToProps)(App);
