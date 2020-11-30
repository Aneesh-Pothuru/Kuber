import CartActionTypes from './cart.types';

export const cartHidden = () => ({
    type: CartActionTypes.CART_HIDDEN
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearItem = item => ({
    type: CartActionTypes.CLEAR_ITEM,
    payload: item
})