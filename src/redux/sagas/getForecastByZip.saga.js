import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getForecastByZip(action) {
    console.log('In getForecast by Zip');
    const apikey = process.env.REACT_APP_API_KEY;
    const zip = action.payload.zip
    try {
        const response = yield axios({
            method: 'GET',
            url: `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${zip}?apikey=${apikey}`
        });
        yield put({
            type: 'SET_FORECAST',
            payload: response.data.DailyForecasts
        });
    } catch(err) {
        console.log('error fetching forecast by zip', err);
    }
}

function* getForecastByZipSaga() {
    yield takeLatest('GET_FORECAST_ZIP', getForecastByZip)
}

export default getForecastByZipSaga;