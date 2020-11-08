import React from 'react';
import { connect } from 'react-redux'
import { cartHidden } from '../../redux/cart/cart.actions'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import './cart-button.scss'

const CartButton = ({ cartHidden }) => (
    <div className='cart-button' onClick={cartHidden}>
        <span className='count'> 0 </span>
        <ShoppingCartOutlinedIcon className='shop' />
    </div>
)

const mapDispatchToProps = dispatch => ({
    cartHidden: () => dispatch(cartHidden())
})

export default connect(null, mapDispatchToProps)(CartButton);