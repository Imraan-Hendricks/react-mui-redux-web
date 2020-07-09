import React from 'react';
import { ArrowRight } from '@material-ui/icons';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDropdownItemStyles } from './drawer-styles';

const DropdownItem = (props) => {
  const active = useSelector((state) => state.components.navbar.state.active);

  const classes = useDropdownItemStyles(
    active === props.id ? { active: true } : { active: false }
  );

  return (
    <ListItem
      button
      className={classes.link}
      onClick={(event) => {
        props.onClick();
        props.closeDrawer(event);
      }}>
      <ListItemIcon className={classes.ListItemIcon}>
        <ArrowRight />
      </ListItemIcon>
      <ListItemText primary={props.name} />
    </ListItem>
  );
};

export default DropdownItem;
