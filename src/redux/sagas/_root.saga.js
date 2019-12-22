import { all } from 'redux-saga/effects';
import { takeEvery, put } from 'redux-saga/effects';
//Imported sagas
import getHomePageSaga from './getHomePageSaga';
import getDetailsSaga from './getDetailsSaga';

//Watcher saga
function* rootSaga() {
    yield takeEvery('GET_DETAILS', getDetailsSaga);
    console.log(`I'm in the watcher saga`)
    yield all(
        [
            getHomePageSaga(),
            getDetailsSaga(),
        ]
    );
}

export default rootSaga;
