import { all } from 'redux-saga/effects';
import { takeEvery} from 'redux-saga/effects';
//Imported sagas
import getHomePageSaga from './getHomePageSaga';
import getDetailsSaga from './getDetailsSaga';
import putTitleSaga from './putTitleSaga';
import putDescriptionSaga from './putDescriptionSaga';

//Watcher saga
function* rootSaga() {
    yield takeEvery('GET_DETAILS', getDetailsSaga);
    console.log(`I'm in the watcher saga`)
    yield all(
        [
            getHomePageSaga(),
            getDetailsSaga(),
            putTitleSaga(),
            putDescriptionSaga(),
        ]
    );
}

export default rootSaga;
