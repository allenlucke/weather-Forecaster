import { combineReducers } from 'redux';
import getHomePageReducer from './getHomePage.reducer';
import getDetailsReducer from './getDetails.reducer';
import editDetailsReducer from './editDetails.reducer';
import putTitleReducer from './putTitle.reducer';

const rootReducer = combineReducers({
    getHomePageReducer,
    getDetailsReducer,
    editDetailsReducer,
    putTitleReducer,
})

export default rootReducer;