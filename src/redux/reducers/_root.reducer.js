import { combineReducers } from 'redux';
import getHomePageReducer from './getHomePage.reducer'
import getDetailsReducer from './getDetails.reducer'
import putDetailsReducer from './putDetails.reducer'

const rootReducer = combineReducers({
    getHomePageReducer,
    getDetailsReducer,
    putDetailsReducer,
})

export default rootReducer;