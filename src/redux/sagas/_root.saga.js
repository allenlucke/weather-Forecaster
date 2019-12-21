import { all } from 'redux-saga/effects';
//Imported sagas
import getHomePageSaga from './getHomePageSaga';
import getDetailsSaga from './getDetailsSaga';

//Watcher saga
function* rootSaga() {
    console.log(`I'm in the watcher saga`)
    yield all(
        [
            getHomePageSaga(),
            getDetailsSaga(),
        ]
    );
}

export default rootSaga;