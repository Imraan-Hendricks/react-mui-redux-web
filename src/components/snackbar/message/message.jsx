import React from 'react';
import SuccessIcon from '@material-ui/icons/CheckCircleOutlined';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import WarningIcon from '@material-ui/icons/ReportProblemOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutlineOutlined';
import DefaultIcon from '@material-ui/icons/NotificationsOutlined';
import { useMessageStyles } from './message-styles';

const Message = (props) => {
  const classes = useMessageStyles({ type: props.type });

  return (
    <div className={classes.root}>
      {props.type === 'success' ? (
        <SuccessIcon className={classes.icon} fontSize='default' />
      ) : props.type === 'info' ? (
        <InfoIcon className={classes.icon} fontSize='default' />
      ) : props.type === 'warning' ? (
        <WarningIcon className={classes.icon} fontSize='default' />
      ) : props.type === 'error' ? (
        <ErrorIcon className={classes.icon} fontSize='default' />
      ) : (
        <DefaultIcon className={classes.icon} fontSize='default' />
      )}
      <p className={classes.text}>{props.msg}</p>
    </div>
  );
};

export default Message;
