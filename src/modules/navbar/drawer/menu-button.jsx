import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useMenuButtonStyles } from './drawer-styles';

const MenuButton = (props) => {
  const classes = useMenuButtonStyles();
  return (
    <IconButton
      edge='start'
      className={classes.iconButton}
      color='inherit'
      aria-label='menu'
      onClick={(event) => props.onClick(event)}>
      <MenuIcon />
    </IconButton>
  );
};

export default MenuButton;
