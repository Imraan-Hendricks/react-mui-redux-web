import { makeStyles } from '@material-ui/core/styles';

const useSnackbarStyles = makeStyles((theme) => ({
  snackbar: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
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
}));

export { useSnackbarStyles };
