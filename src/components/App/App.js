import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './App.css';
import moment from 'moment';
//React-Router
// import { HashRouter as Router, Route } from 'react-router-dom';
//Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// import './../../images/AW_RGB_Small';

class App extends Component {
  state = {
    zip: 64102
  }
  // Renders the entire app on the DOM
  componentDidMount() {
    this.props.dispatch({
        type: 'GET_FORECAST_KC'
    })
  }
  changeField = (event, infoKey) => {
    this.setState({
      [infoKey]: event.target.value
    });
  };

  changeZip = event => {
    event.preventDefault();
      this.props.dispatch({
        type: 'GET_FORECAST_ZIP',
        payload: {
          zip: this.state.zip,
        }
      });
  }

  render() {
    const forecast = this.props.store.getForecastReducer.map((item, index) => {
      return(
          <TableBody key={index}>
              <TableRow>
                  <TableCell>{moment(item.Date).format('dddd')} {moment(item.Date).format('LL')}</TableCell>
                  <TableCell>{item.Temperature.Minimum.Value} {item.Temperature.Minimum.Unit}</TableCell>
                  <TableCell>{item.Temperature.Maximum.Value} {item.Temperature.Maximum.Unit}</TableCell>
                  <TableCell>{item.Day.PrecipitationIntensity} {item.Day.PrecipitationType}</TableCell>
                  <TableCell>{item.Night.PrecipitationIntensity} {item.Night.PrecipitationType}</TableCell>
              </TableRow>
          </TableBody>
      )
  })
    console.log(forecast)
    return (
      <div className="App">
        <h1>Weather Forecast</h1>
        <h2>Up-To-Date 5 Day Forecast in Kansas City, MO</h2>
          <Table>
              <TableHead className="tableHead">
                  <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Min Temp</TableCell>
                      <TableCell>Max Temp</TableCell>
                      <TableCell>Daytime Precipitation</TableCell>
                      <TableCell>Evening Precipitation</TableCell>
                  </TableRow>
              </TableHead>
                  {forecast}
          </Table>
        <div>
          <h3>Change Location</h3>
          <h4>Enter Zip Code</h4>
          <TextField
              style={{ margin: '13px', flex: '1' }}
              variant='outlined'
              size='small'
              type='number'
              // className='inputs'
              label='Zip Code'
              value={this.state.zip}
              onChange={event => this.changeField(event, 'zip')}
              required
          />
          <Button
          style={{ margin: '20px' }}
          variant='contained'
          color='primary'
          onClick={this.changeZip}
        >
          Submit
        </Button>
        </div>
        <div>
          <img src="images/AW_RGB_Small.jpg" alt="AccuWeather"/>
          
        </div>
        <div>
          <a href='https://www.accuweather.com/'>Visit AccuWeather.com</a>
        </div>
      </div>
    );
  }
}
export default connect(mapStoreToProps)(App);
