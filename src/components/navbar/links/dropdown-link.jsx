import React, { Fragment } from 'react';
import { Button, Menu } from '@material-ui/core';
import DropdownItem from './dropdown-item';
import useDropdownLink from './use-dropdown-link';
import { useLinkStyles } from './links-styles';

const DropdownLink = (props) => {
  const {
    active,
    anchorEl,
    ref,
    getIsActive,
    handleClick,
    handleClose,
  } = useDropdownLink();

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
