import React from 'react';
import { createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {styles, theme} from './styles'
import { CssBaseline } from '@material-ui/core';

export default function ButtonAppBar() {
  const classes = styles();

  return (
        <AppBar position="static" color="primary">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Formula 1 Reddit League
            </Typography>
            </Toolbar>
        </AppBar>
  );
}