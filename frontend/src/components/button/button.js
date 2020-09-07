import React from 'react';

import './button.scss';

const Button = ({ children, ...properties }) => (
    <button className='stylebutton' {...properties}>
        {children}
    </button>
)

export default Button;