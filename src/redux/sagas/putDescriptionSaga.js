import axios from 'axios';
import { put, takeLatest} from 'redux-saga/effects';
//PUT call to server to edit description
function* putDescription(action) {
    console.log(`In putDescriptionSaga`);
    console.log(action.payload)
    try {
        const response = yield axios({
            method: 'PUT',
            url: '/putMovies/description/' + action.payload.id,
            data: action.payload
        });
        //Dispatches to putDescriptionReducer
        yield put({
            type: 'SET_DESCRIPTION',
            payload: action.payload.id,
        });
    } catch(err) {
        console.log('put description error', err);
    }
}
function* putDescriptionSaga() {
    yield takeLatest('PUT_DESCRIPTION', putDescription);
}

export default putDescriptionSaga;