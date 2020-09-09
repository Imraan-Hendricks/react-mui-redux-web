import React, { forwardRef } from 'react';
import useNavbar from '../redux/navbar';

import MenuItem from '@material-ui/core/MenuItem';
import { useDropdownItemStyles } from './links-styles';

const DropdownItem = forwardRef((props, ref) => {
  const { active } = useNavbar();

  const classes = useDropdownItemStyles(
    active === props.id ? { active: true } : { active: false }
  );

  return (
    <MenuItem
      ref={ref}
      className={classes.dropdownItem}
      onClick={() => {
        props.handleClose();
        props.onClick();
      }}>
      {props.name}
    </MenuItem>
  );
});

export default DropdownItem;
