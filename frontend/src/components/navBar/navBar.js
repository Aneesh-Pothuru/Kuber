import React from "react";
import './navBar.scss';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Route, Link } from 'react-router-dom';
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import CartButton from '../cart-button/cart-button';
import CartPop from '../cart-pop/cart-pop'
import { emailReport } from "../../api/email/email";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors'

const useStyles = makeStyles((theme) => ({
    buttons: {
        marginRight: theme.spacing(2),
    },
    start: {
        marginLeft: theme.spacing(2),
    },
    signIn: {
        marginLeft: theme.spacing(1),
    },
    end: {
        marginRight: theme.spacing(4),
    },
    grow: {
        flexGrow: 1,
    },
    middle: {
        flexGrow: 2,
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    welcome: {
        textAlign: "center"
    },
}));

export const ButtonAppBar = ({ currentUser, hidden }) => {
    const classes = useStyles();
    const title = "test";
    const subject = "test";
    const csv = "test";
    const home = props => {
        return (
            <Button className={classes.buttons} color="inherit" onClick={() => props.history.push('/')}>
                Home
            </Button>
        )
    }
    const shop = props => {
        return (
            <Button className={classes.buttons} color="inherit" onClick={() => props.history.push('/shop')}>
                Explore
            </Button>
        )
    }
    const about = props => {
        return (
            <Button className={classes.buttons} color="inherit" onClick={() => props.history.push('/about')}>
                About
            </Button>
        )
    }
    const cart = props => {
        return (
            <div>
                <IconButton color="inherit" >
                    <CartButton />
                </IconButton>
                {
                    hidden ? null :
                        <CartPop theProp={props} />
                }
            </div>
        )
    }
    const profile = props => {
        return (
            <IconButton edge="end" color="inherit" onClick={() => props.history.push('/profile')}>
                <AccountCircle />
            </IconButton>
        )
    }
    const signIn = props => {
        return (
            <Button className={classes.signIn} color="inherit" onClick={() => props.history.push('/signin')}>
                Sign In
            </Button>
        )
    }

    return (
        <div data-testid="navigation" className={classes.grow}>
            <AppBar position="static" style={{ backgroundColor: "#028FB2" }}>
                <Toolbar>
                    <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Typography className={classes.title} variant="h6" noWrap style={{ backgroundColor: "#272A2B" }}>
                            <b> <span>&nbsp;</span> Kuber <span>&nbsp;</span> </b>
                        </Typography>
                    </Link>
                    <div className={classes.start}>
                        <Route path='/' component={home} />
                        <Route path='/' component={shop} />
                        <Route path='/' component={about} />
                        <Button
                            color="inherit"
                            href="https://github.com/Aneesh-Pothuru/TheHub"
                        >
                            GitHub
                    </Button>
                    </div>
                    {
                        currentUser ?
                            <div className={classes.middle}>
                                <Link to='/profile' style={{ color: '#FFF', textDecoration: 'none' }}>
                                    <Typography variant="h6" noWrap>
                                        {
                                            currentUser.displayName ?
                                                <b>Welcome back, {currentUser.displayName.split(' ')[0]}</b>
                                                :
                                                <b>Welcome</b>
                                        }
                                    </Typography>
                                </Link>
                            </div>
                            :
                            <div></div>
                    }
                    <div className={classes.grow} />
                    <Route path='/' component={cart} />
                    <div className={classes.sectionDesktop}>
                        <IconButton onClick={() => { currentUser ? emailReport(currentUser.email, title, subject, csv) : emailReport('', '', '', '') }} color="inherit">
                            <MailIcon />
                        </IconButton>
                    </div>
                    <div className={classes.end}>
                        {
                            currentUser ?
                                <Route path='/' component={profile} />
                                :
                                <Route path='/' component={signIn} />
                        }
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapStatetoProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
})

export default connect(mapStatetoProps)(ButtonAppBar);