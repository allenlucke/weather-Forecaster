//Reducer carries payload of movies.id from the details 
//to the edit page
const editDetailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'EDIT_DETAILS':
            return action.payload;
        default:
            return state;
    }
};

export default editDetailsReducer;