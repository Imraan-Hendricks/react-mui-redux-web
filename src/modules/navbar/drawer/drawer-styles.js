import { makeStyles } from '@material-ui/core/styles';

const useDrawerStyles = makeStyles({
  root: {
    marginLeft: 'auto',
  },
  list: {
    width: 'auto',
  },
});

const useLinkStyles = makeStyles((theme) => ({
  link: {
    backgroundColor: (props) =>
      props.active ? theme.palette.primary.main : theme.palette.common.white,
    '&:hover': {
      backgroundColor: (props) =>
        props.active ? theme.palette.primary.main : theme.palette.action.hover,
    },
  },
}));

const useDropdownItemStyles = makeStyles((theme) => ({
  link: {
    paddingLeft: '20px',
    backgroundColor: (props) =>
      props.active ? theme.palette.primary.main : theme.palette.common.white,
    '&:hover': {
      backgroundColor: (props) =>
        props.active ? theme.palette.primary.main : theme.palette.action.hover,
    },
  },
  ListItemIcon: {
    paddingLeft: '20px',
  },
}));

const useMenuButtonStyles = makeStyles((theme) => ({
  iconButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

export {
  useDrawerStyles,
  useLinkStyles,
  useDropdownItemStyles,
  useMenuButtonStyles,
};
