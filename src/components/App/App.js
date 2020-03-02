import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './App.css';
import moment from 'moment';
//React-Router
import { HashRouter as Router, Route } from 'react-router-dom';
//Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import './../../images/AW_RGB_Small';

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
          <TableBody key={index}>
              <TableRow>
                  <TableCell>{moment(item.Date).format('dddd')} {moment(item.Date).format('LL')}</TableCell>
                  <TableCell>{item.Temperature.Minimum.Value} {item.Temperature.Minimum.Unit}</TableCell>
                  <TableCell>{item.Temperature.Maximum.Value} {item.Temperature.Maximum.Unit}</TableCell>
                  <TableCell>{item.Day.PrecipitationIntensity}{item.Day.PrecipitationType}</TableCell>
                  <TableCell>{item.Night.PrecipitationIntensity}{item.Night.PrecipitationType}</TableCell>
              </TableRow>
          </TableBody>
      )
  })
    console.log(forecast)
    return (
      <Router>
      <div className="App">
        <h1>Weather Forecast</h1>
        <h2>Up-To-Date 5 Day Forecast in Kansas City</h2>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Min Temp</TableCell>
                      <TableCell>Max Temp</TableCell>
                      <TableCell>Day</TableCell>
                      <TableCell>Night</TableCell>
                  </TableRow>
              </TableHead>
                  {forecast}
          </Table>
      </div>
      {/* <img src="./../../images/AW_RGB_Small" alt="AccuWeather"/> */}
      </Router>
    );
  }
}
export default connect(mapStoreToProps)(App);
