import React from 'react';
import InputHandle from '../inputHandle/inputHandle';
import Button from '../button/button';
import { Link } from 'react-router-dom';
import { googleLog } from '../../firebase/firebase';
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
                    <Button type="submit">Sign In</Button>
                </form>
                <Link to='/createaccount'>
                    <h5>New user? Create Account</h5>
                </Link>
                <form onSubmit={this.whenSubmit}>
                    <Button onClick={googleLog}>Sign in with Google</Button>
                </form>
            </div>
        )
    }
}

export default SignIn;