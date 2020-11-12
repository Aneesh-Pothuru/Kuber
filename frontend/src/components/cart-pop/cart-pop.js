import React from 'react';
import { connect } from 'react-redux'
import CartList from '../cart-list/cart-list'
import Button from '../button/button';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import './cart-pop.scss';

const CartPop = ({ theProp, cartItems }) => (
    <div className='cart-pop'>
        <div className='cart-items' >
            {
                // eslint-disable-next-line
                cartItems.length != 0 ?
                    cartItems.map(cartItem => (
                        <CartList key={cartItem.id} item={cartItem} />
                    ))
                    :
                    <span className="empty-cart">There are no items in the cart, add items to cart to view here.</span>
            }
        </div>
        <Button onClick={() => theProp.history.push('/checkout')}>Checkout</Button>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartPop));