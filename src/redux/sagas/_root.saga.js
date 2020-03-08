import { all } from 'redux-saga/effects';
// import { takeEvery} from 'redux-saga/effects';

//Imported sagas
import getKCForecastSaga from './getKCForecast.saga';
import getForecastByZipSaga from './getForecastByZip.saga'

//Watcher saga
function* rootSaga() {
    console.log(`I'm in the watcher saga`)
    yield all(
        [
            getKCForecastSaga(),
            getForecastByZipSaga(),
        ]
    );
}

export default rootSaga;
