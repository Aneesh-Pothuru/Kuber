import React from 'react';
import { connect } from 'react-redux'
import { cartHidden } from '../../redux/cart/cart.actions'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';
import './cart-button.scss'


const CartButton = ({ cartHidden, count }) => (
    <div className='cart-button' onClick={cartHidden}>
        <span className='count'> {count} </span>
        <ShoppingCartOutlinedIcon className='shop' />
    </div>
)

const mapStateToProps = createStructuredSelector({
    count: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    cartHidden: () => dispatch(cartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);