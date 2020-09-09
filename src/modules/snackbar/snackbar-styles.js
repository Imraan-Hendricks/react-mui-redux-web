import { makeStyles } from '@material-ui/core/styles';

const useSnackbarStyles = makeStyles((theme) => ({
  snackbar: {
    backgroundColor: (props) =>
      props.type === 'success'
        ? theme.palette.success.main
        : props.type === 'info'
        ? theme.palette.info.main
        : props.type === 'warning'
        ? theme.palette.warning.main
        : props.type === 'error'
        ? theme.palette.error.main
        : theme.palette.common.white,

    maxWidth: '70%',

    [theme.breakpoints.up('sm')]: {
      maxWidth: '50%',
    },

    [theme.breakpoints.up('md')]: {
      maxWidth: '35%',
    },

    [theme.breakpoints.up('lg')]: {
      maxWidth: '25%',
    },
  },

  iconButton: {
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

export { useSnackbarStyles };
