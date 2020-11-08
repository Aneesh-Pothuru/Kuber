import React from 'react';

import Button from '../button/button';

import './cart-pop.scss';

const CartPop = props => (
    <div className='cart-pop'>
        <div className='cart-items' />
        <Button onClick={() => props.theProp.history.push('/checkout')}>Checkout</Button>
    </div>
)

export default CartPop;