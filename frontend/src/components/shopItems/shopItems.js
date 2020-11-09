import React from 'react';

import ExploreItems from '../exploreItems/exploreItems';
import './shopItems.scss';

const shopItems = ({ title, items }) => (
    <div className='items'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='sections'>
            {
                items.filter((item, idx) => idx < 4).map((item) => (
                    <ExploreItems key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)

export default shopItems;