import React from 'react';

import './signin.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    whenSubmit = event => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    whenChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <div className="signin">
                    <h2>Sign Into Existing Account</h2>
                    <span>Enter Email and Password to Log In</span>
                </div>

                <form onSubmit={this.whenSubmit}>
                    <label>Email</label>
                    <input name='email' type='email' value={this.state.email} onChange={this.whenChange} required />
                    <label>Password</label>
                    <input name='password' type='password' value={this.state.password} onChange={this.whenChange} required />
                    <input type="submit" value='Sign In' />
                </form>
            </div>
        )
    }
}

export default SignIn;