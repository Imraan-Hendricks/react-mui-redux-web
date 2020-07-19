import { makeStyles } from '@material-ui/core/styles';

const useSocialStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexBasis: 0,
  },

  social: {
    width: '300px',
    marginTop: '5px',
    marginBottom: '20px',
    [theme.breakpoints.up('lg')]: {
      marginTop: '0',
      marginBottom: '0',
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
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5px',
    marginBottom: '5px',
  },
});

export { useIconsStyles, useLoginStrategyStyles, useSocialStyles };
