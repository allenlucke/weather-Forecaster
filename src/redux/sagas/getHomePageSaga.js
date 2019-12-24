import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// Get call for full list of movies
function* getHomePage() {
    console.log(`In getHomePage`);
    try {
        const response = yield axios({
            method: 'GET',
            url: '/getMovies'
        });
        //Sends payload to homepage reducer
        yield put({
            type: 'SET_HOMEPAGE',
            payload: response.data
        });
    } catch(err) {
        console.log('error fetching homepage movies', err);
    }
}
function* getHomePageSaga() {
    yield takeLatest('GET_HOMEPAGE', getHomePage);
}

export default getHomePageSaga;