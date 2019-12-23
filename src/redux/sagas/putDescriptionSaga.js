import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';

function* putDescription(action) {
    console.log(`In putDescriptionSaga`);
    console.log(action.payload)
    try {
        const response = yield axios({
            method: 'PUT',
            url: '/putMovies/description/' + action.payload.id,
            data: action.payload
        });
        // yield call(getDetailsSaga);
        yield put({
            type: 'SET_DESCRIPTION',
            payload: action.payload.id,
            // payload: response.data
        });
    } catch(err) {
        console.log('put description error', err);
    }
}


function* putDescriptionSaga() {
    yield takeLatest('PUT_DESCRIPTION', putDescription);
}

export default putDescriptionSaga;