import React from 'react';
import { Link } from 'react-router-dom';
import './accounts.scss'

import SignIn from '../signin/signin';

const Account = () => (
    <div className='accounts'>
        <SignIn />
        <Link to='/createaccount'>
            <h5>New user? Create Account</h5>
        </Link>
    </div>
)

export default Account;