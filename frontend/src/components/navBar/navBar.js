import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import { Route } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import ReactStars from "react-rating-stars-component";


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
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const shop = props => {
        return (
            <Button className={classes.buttons} color="inherit" onClick={() => props.history.push('/shop')}>
                Explore
            </Button>
        )
    }
    const contact = props => {
        return (
            <Button className={classes.buttons} color="inherit" onClick={() => props.history.push('/contact')}>
                Contact
            </Button>
        )
    }
    const about = props => {
        return (
            <Button className={classes.buttons} color="inherit" onClick={() => props.history.push('/about')}>
                About Us
            </Button>
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
                    <Typography className={classes.title} variant="h6" noWrap style={{ backgroundColor: "#272A2B" }}>
                        <b> <span>&nbsp;</span> Cyber List <span>&nbsp;</span> </b>
                    </Typography>
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
                    <Route path='/' component={shop} />
                    <Route path='/' component={contact} />
                    <Route path='/' component={about} />
                    <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 0 new mails" color="inherit">
                            <Badge badgeContent={0} color="secondary">
                                <MailIcon />
                            </Badge>
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