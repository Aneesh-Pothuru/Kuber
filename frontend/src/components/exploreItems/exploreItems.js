import React from 'react';
import { connect } from 'react-redux';
import Button from '../button/button';
import { addItem } from '../../redux/cart/cart.actions'
import './exploreItems.scss';

const ExploreItems = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='explore-items'>
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='cart'>
                <span className='price'>{price}</span>
                <span className='name'>{name}</span>
            </div>
            <Button onClick={() => addItem(item)}>Add to Cart</Button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ExploreItems);