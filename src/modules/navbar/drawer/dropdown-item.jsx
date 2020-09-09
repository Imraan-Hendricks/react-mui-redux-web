import React from 'react';
import useNavbar from '../redux/navbar';

import { ArrowRight } from '@material-ui/icons';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useDropdownItemStyles } from './drawer-styles';

const DropdownItem = (props) => {
  const { active } = useNavbar();

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
