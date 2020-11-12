import React from 'react'
import './checkout-item.scss'

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
    return (
        <div className='checkout'>
            <div className='imgcon'>
                <img alt='product' src={imageUrl} />
            </div>
            <span className='desc'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove'>&#10060;</div>
        </div>
    )
}

export default CheckoutItem;