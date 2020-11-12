import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../checkout-item/checkout-item'
import { selectCartItems, selectTotal } from '../../redux/cart/cart.selectors'
import './checkout.scss'

const Checkout = ({ cartItems, total }) => {
    return (
        <div className='checkout'>
            <div className='header'>
                <div className='title'>
                    <span>Product</span>
                </div>
                <div className='title'>
                    <span>Description</span>
                </div>
                <div className='title'>
                    <span>Quantity</span>
                </div>
                <div className='title'>
                    <span>Price</span>
                </div>
                <div className='title'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem =>
                    // <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    cartItem.name
                )
            }
            <div className='total'>
                <span>Total: ${total}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectTotal
})

export default connect(mapStateToProps)(Checkout);