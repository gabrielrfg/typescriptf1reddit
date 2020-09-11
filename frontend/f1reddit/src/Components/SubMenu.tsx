import React, { CSSProperties } from 'react';
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


export default function SubMenu(props:{text:String, style: CSSProperties}){
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const classes = styles();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <Typography className={classes.button} variant="h6" style={props.style} >{props.text}</Typography>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Division 1</MenuItem>
                <MenuItem onClick={handleClose}>Division 2</MenuItem>
                <MenuItem onClick={handleClose}>Division 3</MenuItem>
            </Menu>
        </div>
    )
}