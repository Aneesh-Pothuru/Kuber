
import React from "react";
import "./App.css";
import { Route, Redirect } from 'react-router-dom';
import NavBar from "./components/navBar/navBar";
import HomePage from "./components/homepage/homepage";
import Shop from "./components/shop/shop";
import About from "./components/about/about"
import Account from "./components/accounts/accounts"
import Profile from "./components/profile/profile"
import CreateAccount from "./components/createAccount/createAccount";
import Checkout from './components/checkout/checkout'
import { auth, userProfileDocument } from './firebase/firebase';
import { connect } from 'react-redux';
import { setUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

export class App extends React.Component {

  leaveAuth = null;

  componentDidMount() {
    const { setUser } = this.props;
    this.leaveAuth = auth.onAuthStateChanged(async theUser => {
      if (theUser) {
        const userId = await userProfileDocument(theUser);

        userId.onSnapshot(getId => {
          setUser({
            id: getId.id,
            ...getId.data()
          })
        })
      }
      setUser(theUser);
    });
  }

  componentWillUnmount() {
    this.leaveAuth();
  }

  render() {
    return (
      <div className="App">
        <Route exact={false} path='/'>
          <NavBar />
        </Route>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route exact path='/about' component={About} />
        <Route exact path='/signin' render={() => this.props.user ? (<Redirect to='/' />) : (<Account />)} />
        <Route exact path='/createaccount' component={CreateAccount} />
        <Route exact path='/profile' render={() => !this.props.user ? (<Redirect to='/signin' />) : (<Profile />)} />
        <Route exact path='/checkout' component={Checkout} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);