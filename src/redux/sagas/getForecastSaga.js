import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// require('dotenv').config();

function* getForecast() {
    console.log('In getForecast');
    // console.log(process.env.REACT_APP_API_KEY);
    const apikey = process.env.REACT_APP_API_KEY;
    // console.log(apikey)
    try {
        const response = yield axios({
            method: 'GET',
            url: `http://dataservice.accuweather.com/forecasts/v1/daily/5day/64102?apikey=${apikey}`
        });
        yield put({
            type: 'SET_FORECAST',
            payload: response.data.DailyForecasts
        });
    } catch(err) {
        console.log('error fetching forecast', err);
    }
}

function* getForecastSaga() {
    yield takeLatest('GET_FORECAST', getForecast)
}

export default getForecastSaga;