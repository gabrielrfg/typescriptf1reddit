import React, { CSSProperties } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { styles } from './styles';
import { Typography } from '@material-ui/core';



export default function MenuListComposition(props:{text:String, style: CSSProperties}) {
  const classes = styles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
    <Button
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
    >
        <Typography style={props.style}>
            {props.text}
        </Typography>
    </Button>
    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.menuGrow}>
        {({ TransitionProps, placement }) => (
        <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
        >
            <Paper>
            <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} className={classes.dropdownMenu}>
                <MenuItem onClick={handleClose}>Division 1</MenuItem>
                <MenuItem onClick={handleClose}>Division 2</MenuItem>
                <MenuItem onClick={handleClose}>Division 3</MenuItem>
                </MenuList>
            </ClickAwayListener>
            </Paper>
        </Grow>
        )}
    </Popper>
    </div>
  );
}