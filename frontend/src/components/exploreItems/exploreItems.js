import React from 'react';
import { connect } from 'react-redux';
import Button from '../button/button';
import { addItem } from '../../redux/cart/cart.actions'
import './exploreItems.scss';

const ExploreItems = ({ id, name, price, imageUrl }) => (
    <div className='explore-items'>
        <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className='cart'>
            <span className='price'>{price}</span>
            <span className='name'>{name}</span>
        </div>
        <Button >Add to Cart</Button>
    </div>
)

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ExploreItems);