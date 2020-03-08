import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getKCForecast() {
    console.log('In getForecast');
    const apikey = process.env.REACT_APP_API_KEY;
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
        console.log('error fetching KC forecast', err);
    }
}

function* getKCForecastSaga() {
    yield takeLatest('GET_FORECAST_KC', getKCForecast)
}

export default getKCForecastSaga;