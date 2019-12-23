import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import getDetailsSaga from './getDetailsSaga';

function* putTitle(action) {
    console.log(`In putTitleSaga`);
    console.log(action.payload)
    try {
        const response = yield axios({
            method: 'PUT',
            url: '/putMovies/title/' + action.payload.id,
            data: action.payload
        });
        // yield call(getDetailsSaga);
        yield put({
            type: 'SET_TITLE',
            payload: action.payload.id,
            // payload: response.data
        });
    } catch(err) {
        console.log('put title error', err);
    }
}


function* putTitleSaga() {
    yield takeLatest('PUT_TITLE', putTitle);
}

export default putTitleSaga;