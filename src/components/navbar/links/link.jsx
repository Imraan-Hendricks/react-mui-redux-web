import React from 'react';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { useLinkStyles } from './links-styles';

const Link = (props) => {
  const active = useSelector((state) => state.components.navbar.state.active);

  const classes = useLinkStyles(
    active === props.id ? { active: true } : { active: false }
  );

  return (
    <Button color='inherit' className={classes.link} onClick={props.onClick}>
      {props.name}
    </Button>
  );
};

export default Link;
