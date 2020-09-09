import { makeStyles } from '@material-ui/core/styles';

const useMessageStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },

  icon: {
    marginRight: '12.5px',
    color: (props) =>
      props.type === 'success'
        ? theme.palette.success.contrastText
        : props.type === 'info'
        ? theme.palette.info.contrastText
        : props.type === 'warning'
        ? theme.palette.warning.contrastText
        : props.type === 'error'
        ? theme.palette.error.contrastText
        : theme.palette.primary.main,
  },

  text: {
    color: (props) =>
      props.type === 'success'
        ? theme.palette.success.contrastText
        : props.type === 'info'
        ? theme.palette.info.contrastText
        : props.type === 'warning'
        ? theme.palette.warning.contrastText
        : props.type === 'error'
        ? theme.palette.error.contrastText
        : theme.palette.primary.main,
  },
}));

export { useMessageStyles };
