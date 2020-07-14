import { makeStyles } from '@material-ui/core/styles';

const useSocialStyles = makeStyles((theme) => ({
  socialWrapper: {
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '50%',
    },
  },

  social: {
    width: '300px',
    marginTop: '5px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('lg')]: {
      marginLeft: '0px',
      marginTop: '110px',
    },
  },
}));

const useIconsStyles = makeStyles({
  icon: {
    fontSize: '40px',
  },
});

const useLoginStrategyStyles = makeStyles({
  listInner: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px',
    display: 'flex',
  },

  listItemText: {
    marginTop: '7px',
  },
});

export { useIconsStyles, useLoginStrategyStyles, useSocialStyles };
