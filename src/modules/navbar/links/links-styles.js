import { makeStyles } from '@material-ui/core/styles';

const useLinksStyles = makeStyles((theme) => ({
  links: {
    [theme.breakpoints.down('600')]: {
      display: 'none',
    },
  },
}));

const useLinkStyles = makeStyles((theme) => ({
  link: {
    color: (props) =>
      props.active
        ? theme.palette.secondary.main
        : theme.palette.primary.contrastText,
    fontSize: '15px',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
    textTransform: 'none',
  },
}));

const useDropdownItemStyles = makeStyles((theme) => ({
  dropdownItem: {
    minWidth: '175px',
    backgroundColor: (props) =>
      props.active ? theme.palette.primary.main : theme.palette.common.white,
    '&:hover': {
      backgroundColor: (props) =>
        props.active ? theme.palette.primary.main : theme.palette.action.hover,
    },
  },
}));

export { useLinksStyles, useLinkStyles, useDropdownItemStyles };
