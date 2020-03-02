const getForecastReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FORECAST':
            return action.payload;
        default:
            return state;
    }
}
export default getForecastReducer;