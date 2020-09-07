import React from 'react';

import './inputHandle.scss';

const InputHandle = ({ inputChange, label, ...properties }) => (
    <div className='inputArea' >
        <input className='inputHandle' onChange={inputChange} {...properties} />
        {
            label ?
                (<label className={`${properties.value.length ? 'filled' : ''} inputHandleSize`}>
                    {label}
                </label>)
                : null
        }
    </div>
)

export default InputHandle;