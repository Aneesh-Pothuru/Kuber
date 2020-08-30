import React from 'react';
import './items.scss';
import { withRouter } from 'react-router-dom'

const items = ({ title, imageUrl, history, linkUrl, match }) => (
    <div
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        className='item'>
        <div className='content'>
            <h1 className='title'>{title}</h1>
        </div>
    </div>
);

export default withRouter(items);