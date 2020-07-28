import React from 'react';
import Button from '@material-ui/core/Button';
import useNavbar from '../redux/navbar';
import { useLinkStyles } from './links-styles';

const Link = (props) => {
  const { active } = useNavbar();

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
