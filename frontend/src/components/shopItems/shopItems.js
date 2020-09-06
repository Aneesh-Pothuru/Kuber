import React from 'react';

import ExploreItems from '../exploreItems/exploreItems';
import './shopItems.scss';

const shopItems = ({ title, items }) => (
    <div className='items'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='sections'>
            {
                items.filter((item, idx) => idx < 3).map(({ id, ...itemProps }) => (
                    <ExploreItems key={id} {...itemProps} />
                ))
            }
        </div>
    </div>
)

export default shopItems;