import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* putTitle() {
    console.log(`In putTitleSaga`);
    try {
        const response = yield axios({
            method: 'PUT',
            url: '/putMovies/title'
        });
        yield put({
            type: 'SET_DETAILS',
            payload: response.data
        });
    } catch(err) {
        console.log('put title error', err);
    }
}


function* putTitleSaga() {
    yield takeLatest('PUT_DETAILS', putTitle);
}

export default putTitleSaga;