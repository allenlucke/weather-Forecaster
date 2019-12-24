// Used to store list of movies returned from the server and rendered on the homepage
//Movies received from getHomePageSaga
const getHomePageReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HOMEPAGE':
            return action.payload;
        default:
            return state;
    }
}
export default getHomePageReducer;