import { makeStyles } from '@material-ui/core/styles';

const useLocalStyles = makeStyles((theme) => ({
  localWrapper: {
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '50%',
    },
  },

  formWrapper: {
    width: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('lg')]: {
      marginRight: '0px',
    },
  },

  accountIcon: {
    color: theme.palette.primary.main,
    fontSize: '250px',
    marginLeft: '25px',
  },

  textField: {
    width: '80%',
    marginLeft: '10%',
    marginBottom: '15px',
  },

  loginButton: {
    marginTop: '15px',
    marginLeft: '10%',
    marginBottom: '15px',
    textTransform: 'none',
  },
}));

export { useLocalStyles };
