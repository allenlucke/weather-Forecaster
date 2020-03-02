import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getForecast() {
    console.log('In getGiphy');
    try {
        const response = yield axios({
            method: 'GET',
            url: `http://dataservice.accuweather.com/forecasts/v1/daily/1day/64102?apikey=${process.env.API_KEY}`
        });
        yield put({
            type: 'SET_FORECAST',
            payload: response.data
        });
    } catch(err) {
        console.log('error fetching forecast', err);
    }
}

function* getForecastSaga() {
    yield takeLatest('GET_FORECAST', getForecast)
}

export default getForecastSaga;