import React from 'react';
import './items.scss';

const items = ({ title, imageUrl }) => (
    <div
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        className='item'>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            {/* <span className='subtitle'>SHOP NOW</span> */}
        </div>
    </div>
);

export default items;