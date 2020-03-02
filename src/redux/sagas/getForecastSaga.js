import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// require('dotenv').config();

function* getForecast() {
    console.log('In getForecast');
    console.log(process.env.API_KEY)
    try {
        const response = yield axios({
            method: 'GET',
            url: `http://dataservice.accuweather.com/forecasts/v1/daily/5day/64102?apikey=zdP9zGcoJn6PG22G20vcNlrUGmbZ1Pgx`
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