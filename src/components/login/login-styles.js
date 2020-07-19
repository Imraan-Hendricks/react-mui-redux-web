import { makeStyles } from '@material-ui/core/styles';

const useLoginStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    marginTop: '50px',
    marginBottom: '50px',
    marginLeft: 'auto',
    marginRight: 'auto',

    [theme.breakpoints.up('sm')]: {
      width: '70%',
    },

    [theme.breakpoints.up('md')]: {
      width: '50%',
    },

    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      marginTop: '150px',
      marginBottom: '150px',
    },
  },
}));

export { useLoginStyles };
