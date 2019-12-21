// Used to store the movie details
const getDetailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
};

export default getDetailsReducer;