import React, { forwardRef } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector } from 'react-redux';
import { useDropdownItemStyles } from './links-styles';

const DropdownItem = forwardRef((props, ref) => {
  const active = useSelector((state) => state.components.navbar.state.active);

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
