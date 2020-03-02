import { all } from 'redux-saga/effects';
import { takeEvery} from 'redux-saga/effects';

//Imported sagas
import getForecastSaga from './getForecastSaga';

//Watcher saga
function* rootSaga() {
    console.log(`I'm in the watcher saga`)
    yield all(
        [
            getForecastSaga(),
        ]
    );
}

export default rootSaga;
