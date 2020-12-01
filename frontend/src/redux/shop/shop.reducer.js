import ITEMS from './shop.items'
const INITIAL_STATE = {
    collections: ITEMS
}
const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;