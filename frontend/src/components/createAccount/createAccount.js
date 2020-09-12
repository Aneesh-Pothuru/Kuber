import React from 'react';
import './createAccount.scss';
import InputHandle from '../inputHandle/inputHandle';
import Button from '../button/button';
import { auth, userProfileDocument } from '../../firebase/firebase';

class CreateAccount extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            pass: '',
            confirmPass: '',
        }
    }

    createSubmit = async event => {
        event.preventDefault();
        const { displayName, email, pass, confirmPass } = this.state;

        if (pass !== confirmPass) {
            alert('Passwords do not match');
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, pass);
            await userProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                pass: '',
                confirmPass: '',
            });
        } catch (error) {
            console.error(error);
        }
    }

    createChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, pass, confirmPass } = this.state;
        return (
            <div className='createAccount'>
                <h2>Create New Account</h2>
                <span>Please fill out all fields to sign up today!</span>

                <form className='form' onSubmit={this.createSubmit}>
                    <InputHandle type='text' name='displayName' value={displayName} onChange={this.createChange} label='Full Name' required />
                    <InputHandle type='email' name='email' value={email} onChange={this.createChange} label='Email' required />
                    <InputHandle type='password' name='pass' value={pass} onChange={this.createChange} label='Password' required />
                    <InputHandle type='password' name='confirmPass' value={confirmPass} onChange={this.createChange} label='Confirm Password' required />
                    <Button type="submit">Create Account</Button>
                </form>
            </div>
        )
    }
}

export default CreateAccount;