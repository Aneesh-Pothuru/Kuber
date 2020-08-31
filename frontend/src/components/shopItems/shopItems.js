import React from 'react';

import './shopItems.scss';

const shopItems = ({ title, items }) => (
    <div className='items'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='sections'>
            {
                items.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
    </div>
)

export default shopItems;