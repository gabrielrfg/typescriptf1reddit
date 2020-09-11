import React from 'react';
import { createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {styles, theme} from './styles'
import { CssBaseline, Menu, MenuItem } from '@material-ui/core';
import logo from '../fonts/logo.png';
import SubMenu from './SubMenu';
import SubMenu2 from './SubMenu';
import MenuListComposition from './SubMenu2';

export default function ButtonAppBar() {
    const classes = styles();
    return (
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img src={logo} style={{maxHeight: 60}}/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        r/F1 SimRacing League
                    </Typography>
                    <MenuListComposition text="PC" style={{color:"white", fontSize:"2em", fontFamily:"Formula1"}}/>
                    <MenuListComposition text="PS4" style={{color:"blue",fontSize:"2em", fontFamily:"Formula1"}}/>
                    <MenuListComposition text="XBOX" style={{color:"green",fontSize:"2em", fontFamily:"Formula1"}}/>
                </Toolbar>
            </AppBar>
    );
}