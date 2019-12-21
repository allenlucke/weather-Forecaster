import { combineReducers } from 'redux';
import getHomePageReducer from './getHomePage.reducer'
import getDetailsReducer from './getDetails.reducer'

const rootReducer = combineReducers({
    getHomePageReducer,
    getDetailsReducer,
})

export default rootReducer;