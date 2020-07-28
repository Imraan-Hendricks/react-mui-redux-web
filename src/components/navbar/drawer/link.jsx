import React from 'react';
import { ArrowRight } from '@material-ui/icons';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import useNavbar from '../redux/navbar';
import { useLinkStyles } from './drawer-styles';

const Link = (props) => {
  const { active } = useNavbar();

  const classes = useLinkStyles(
    active === props.id ? { active: true } : { active: false }
  );

  return (
    <ListItem button className={classes.link} onClick={props.onClick}>
      <ListItemIcon>
        <ArrowRight />
      </ListItemIcon>
      <ListItemText primary={props.name} />
    </ListItem>
  );
};

export default Link;
