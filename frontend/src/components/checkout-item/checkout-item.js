import React from 'react'
import { connect } from 'react-redux'
import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions'
import './checkout-item.scss'

const CheckoutItem = ({ cartItem, clearItems, addItems, removeItems }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                {/* eslint-disable-next-line */}
                <div className="pointer" onClick={() => removeItems(cartItem)}>&#10134;</div>
                <span className='val'> {quantity} </span>
                {/* eslint-disable-next-line */}
                <div className="pointer" onClick={() => addItems(cartItem)}>&#10133;</div>
            </span>
            <span className='price'>{price}</span>
            {/* eslint-disable-next-line */}
            <div className='remove-button' onClick={() => clearItems(cartItem)}>&#10060;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItems: item => dispatch(clearItem(item)),
    addItems: item => dispatch(addItem(item)),
    removeItems: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);