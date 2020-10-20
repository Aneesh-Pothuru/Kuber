import React from 'react';

import './exploreItems.scss';

const ExploreItems = ({ id, name, price, imageUrl }) => (
    <div className='explore-items'>
        <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className='cart'>
            <span className='price'>{price}</span>
            <span className='name'>{name}</span>
        </div>
    </div>
)

export default ExploreItems;