import React from 'react';
import './profile.scss';
import Button from '../button/button';
import { auth } from '../../firebase/firebase';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";

const ProfilePage = ({ currentUser }) => {
    const signIn = props => {
        return (
            <Button onClick={() => props.history.push('/signin')}>
                Sign In
            </Button>
        )
    }

    return (
        <div>
            {
                currentUser ?
                    <div>
                        <img
                            className="profileImage"
                            alt={currentUser.displayName}
                            src={currentUser.displayName ?
                                `https://robohash.org/${
                                currentUser.displayName.split(' ')[0]
                                }?set=set3`
                                : `https://robohash.org/${
                                currentUser.email
                                }?set=set3`}
                        />
                        <div className="userProfile">
                            <h2>Account Details</h2>
                            <div className='container'>
                                <h3 className='profleCategory'>Full Name:</h3>
                                <h3 className='profileDescription'>{currentUser.displayName}</h3>
                            </div>
                            <div className='container'>
                                <h3 className='profleCategory'>Current E-Mail:</h3>
                                <h3 className='profileDescription'>{currentUser.email}</h3>
                            </div>
                        </div>
                        <div class="outButton">
                            <Button onClick={() => auth.signOut()}>Sign Out</Button>
                        </div>
                    </div>
                    :
                    <div class="outButton">
                        <h2>You have successfully signed out! Please click below to sign back into your account.</h2>
                        <Route path='/' component={signIn} />
                    </div>
            }
        </div>
    );
}

const mapStatetoProps = state => ({
    currentUser: state.user.user
})

export default connect(mapStatetoProps)(ProfilePage);
