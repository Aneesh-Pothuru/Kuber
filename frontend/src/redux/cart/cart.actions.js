import CartActionTypes from './cart.types';

export const cartHidden = () => ({
    type: CartActionTypes.CART_HIDDEN
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})