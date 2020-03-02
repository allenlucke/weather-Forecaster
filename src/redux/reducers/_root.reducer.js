import { combineReducers } from 'redux';
// Reducers
import getForecastReducer from './getForecast.reducer'
// combineReducers
const rootReducer = combineReducers({
    getForecastReducer,
})
export default rootReducer;