import { makeStyles } from '@material-ui/core/styles';

const useBackdropStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export { useBackdropStyles };
