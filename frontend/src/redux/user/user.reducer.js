const STATE = {
    user: null
}

const userReducer = (state = STATE, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;