import axios from 'axios';
import { put, takeLatest, actionChannel } from 'redux-saga/effects';

function* getDetails(action) {
    console.log(`In getDetails`);
    console.log()
    try {
        const response = yield axios({
            method: 'GET',
            url: '/getMovies/details/' + action.payload,
        });
        yield put({
            type: 'SET_DETAILS',
            payload: response.data
        });
    } catch(err) {
        console.log('error fetching details movies', err);
    }
}


function* getDetailsSaga() {
    yield takeLatest('GET_DETAILS', getDetails);
}

export default getDetailsSaga;