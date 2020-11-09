import React from 'react';
import { connect } from 'react-redux'
import CartList from '../cart-list/cart-list'
import Button from '../button/button';
import { selectCartItems } from '../../redux/cart/cart.selectors'
import './cart-pop.scss';

const CartPop = ({ theProp, cartItems }) => (
    <div className='cart-pop'>
        <div className='cart-items' >
            {cartItems.map(cartItem => (
                <CartList key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <Button onClick={() => theProp.history.push('/checkout')}>Checkout</Button>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartPop);