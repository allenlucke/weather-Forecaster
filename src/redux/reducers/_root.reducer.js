import { combineReducers } from 'redux';
// Reducers
import getHomePageReducer from './getHomePage.reducer';
import getDetailsReducer from './getDetails.reducer';
import editDetailsReducer from './editDetails.reducer';
import putTitleReducer from './putTitle.reducer';
import putDescriptionReducer from './putDescription.Reducer';
// combineReducers
const rootReducer = combineReducers({
    getHomePageReducer,
    getDetailsReducer,
    editDetailsReducer,
    putTitleReducer,
    putDescriptionReducer,
})
export default rootReducer;