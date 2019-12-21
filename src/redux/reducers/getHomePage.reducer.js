// Used to store movies returned from the server
const getHomePageReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HOMEPAGE':
            return action.payload;
        default:
            return state;
    }
}

export default getHomePageReducer;