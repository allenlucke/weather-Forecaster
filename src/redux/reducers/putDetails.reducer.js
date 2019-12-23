const putDetailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'EDIT_DETAILS':
            return action.payload;
        default:
            return state;
    }
};

export default putDetailsReducer;