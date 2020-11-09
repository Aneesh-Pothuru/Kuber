import React from 'react';

import './cart-list.scss'

const CartList = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className='list'>
        <img src={imageUrl} alt='item' />
        <div className='detail'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x {price}</span>
        </div>
    </div>
)

export default CartList;