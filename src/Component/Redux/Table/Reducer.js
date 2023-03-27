const initialState = {
    table:''
}

const tableReducer = (state = initialState,action) => {
    switch(action.type){
        case 'SELECT_TABLE':
            return {
                table:action.payload,
            }
        default:
            return state;
    }
}

export default tableReducer