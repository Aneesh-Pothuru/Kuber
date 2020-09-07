import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Route, Link } from 'react-router-dom';
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { emailReport } from "../../api/email/email";


const useStyles = makeStyles((theme) => ({
    buttons: {
        marginRight: theme.spacing(2),
    },
    start: {
        marginLeft: theme.spacing(2),
    },

    end: {
        marginLeft: theme.spacing(2),
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    welcome: {
        position: "relative",
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(5),
    },
}));

export default function ButtonAppBar() {
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
            <IconButton color="inherit" onClick={() => props.history.push('/checkout')}>
                <ShoppingCartOutlinedIcon />
            </IconButton>
        )
    }
    const profile = props => {
        return (
            <IconButton edge="end" color="inherit" onClick={() => props.history.push('/signin')}>
                <AccountCircle />
            </IconButton>
        )
    }

    return (
        <div className={classes.grow}>
            <AppBar position="static" style={{ backgroundColor: "#028FB2" }}>
                <Toolbar>
                    <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Typography className={classes.title} variant="h6" noWrap style={{ backgroundColor: "#272A2B" }}>
                            <b> <span>&nbsp;</span> Kuber <span>&nbsp;</span> </b>
                        </Typography>
                    </Link>
                    {/* <div className={classes.welcome}>
                        <Link to='/profile' style={{ color: '#FFF', textDecoration: 'none' }}>
                            <Typography variant="h6" noWrap>
                                <b> Welcome back, name</b>
                            </Typography>
                        </Link>
                    </div> */}
                    <div className={classes.start}>
                        <Route path='/' component={home} />
                        <Route path='/' component={shop} />
                        <Route path='/' component={about} />
                    </div>
                    <div className={classes.grow} />
                    <Route path='/' component={cart} />
                    <div className={classes.sectionDesktop}>
                        <IconButton onClick={() => { emailReport(title, subject, csv) }} color="inherit">
                            <MailIcon />
                        </IconButton>
                    </div>
                    <Route path='/' component={profile} />
                    <Button
                        className={classes.end}
                        color="inherit"
                        href="https://github.com/Aneesh-Pothuru/TheHub"
                    >
                        GitHub
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}