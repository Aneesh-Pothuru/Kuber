import React from 'react';
import InputHandle from '../inputHandle/inputHandle';
import './signin.scss';

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
                    <InputHandle name='email' type='email' value={this.state.email} inputChange={this.whenChange} label='Email' required />
                    <InputHandle name='password' type='password' value={this.state.password} inputChange={this.whenChange} label='Password' required />
                    <input type="submit" value='Sign In' />
                </form>
            </div>
        )
    }
}

export default SignIn;