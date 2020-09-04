import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { Route, Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { emailReport } from "../../api/email/email";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginBottom: theme.spacing(0.5),
    },

    buttons: {
        marginRight: theme.spacing(2),
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
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
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
            <IconButton edge="end" color="inherit" onClick={() => props.history.push('/profile')}>
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
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search or jump to..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                    <Route path='/' component={home} />
                    <Route path='/' component={shop} />
                    <Route path='/' component={about} />
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