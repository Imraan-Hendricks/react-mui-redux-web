import { makeStyles } from '@material-ui/core/styles';

const useLocalStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexBasis: 0,
  },

  formWrapper: {
    width: '300px',
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'auto',
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
