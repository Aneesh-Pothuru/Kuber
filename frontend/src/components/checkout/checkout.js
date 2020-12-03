import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../checkout-item/checkout-item'
import { selectCartItems, selectTotal } from '../../redux/cart/cart.selectors'
import './checkout.scss'
import Stripe from '../stripe-button/stripe-button';
import { emailReport } from "../../api/email/email";
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Checkout = ({ cartItems, total, currentUser }) => {
    const email = currentUser ? currentUser.email : 'kubersjsu@gmail.com';
    const title = "Kuber Purchase Receipt";
    const body = "";
    const body1 = cartItems.map(cartItem =>
        body + cartItem.name + " " + cartItem.price + "\n"
    );
    const thanks = currentUser ? `Dear ${currentUser.displayName}, \n\nThank you for your purchase. Your products should be shipped soon! Below we have attatched your receipt. \n\nHappy Shopping, \nKuber Team` : "Thank you";
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
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            <div className='total'>
                <span className='total1'>Total: ${total}</span>
                <Stripe onClick={emailReport(email, title, thanks, body1 + `\n $${total}`)} price={total} />
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartItems: selectCartItems,
    total: selectTotal
})

export default connect(mapStateToProps)(Checkout);