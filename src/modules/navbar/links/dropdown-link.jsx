import React, { createRef, Fragment, useState } from 'react';
import useNavbar from '../redux/navbar';

import { Button, Menu } from '@material-ui/core';
import DropdownItem from './dropdown-item';
import { useLinkStyles } from './links-styles';

const DropdownLink = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const ref = createRef();

  const { active } = useNavbar();

  const getIsActive = (active, dropdownItems) => {
    let isActive = false;
    dropdownItems.forEach((item) => {
      if (!isActive) if (active === item.id) isActive = true;
    });
    return isActive;
  };

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const classes = useLinkStyles(
    getIsActive(active, props.dropdownItems)
      ? { active: true }
      : { active: false }
  );

  return (
    <Fragment>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        className={classes.link}
        color='inherit'
        onClick={handleClick}>
        {props.name}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        {props.dropdownItems.map((item) => (
          <DropdownItem
            ref={ref}
            key={item.name}
            id={item.id}
            name={item.name}
            onClick={item.onClick}
            handleClose={handleClose}
          />
        ))}
      </Menu>
    </Fragment>
  );
};

export default DropdownLink;
