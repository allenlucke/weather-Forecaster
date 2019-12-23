const putTitleReducer = (state = [], action) => {
    switch (action.type) {
        case 'PUT_TITLE':
            return action.payload;
        default:
            return state;
    }
};

export default putTitleReducer;