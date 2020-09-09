import React from 'react';
import { ListItemIcon, ListItem, ListItemText } from '@material-ui/core';
import { useLoginStrategyStyles } from './social-styles';

const LoginStrategy = (props) => {
  const classes = useLoginStrategyStyles();
  return (
    <ListItem button component='a' href={getUrlPrefix() + props.url}>
      <div className={classes.listInner}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.text} />
      </div>
    </ListItem>
  );
};

const getUrlPrefix = () => {
  if (process.env.NODE_ENV !== 'production') {
    return 'http://localhost:5000';
  }
  // for deployment:
  // ---------------------------------------
  // change localhost below to server domain
  // port not required (port 80)
  // ex1. https://www.myWebsite.com
  // ex2. https://ip
  //----------------------------------------
  return 'http://localhost:5000';
};

export default LoginStrategy;
