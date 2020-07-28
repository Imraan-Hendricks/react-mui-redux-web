import React from 'react';
import { ArrowDropDown, ArrowRight } from '@material-ui/icons';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DropdownItem from './dropdown-item';
import useNavbar from '../redux/navbar';
import useToggle from '../../../hooks/toggle';
import { useLinkStyles } from './drawer-styles';

const DropdownLink = (props) => {
  const { active } = useNavbar();

  const [isOpen, toggle] = useToggle(false);

  const getIsActive = (active, dropdownItems) => {
    let isActive = false;
    dropdownItems.forEach((item) => {
      if (!isActive) if (active === item.id) isActive = true;
    });
    return isActive;
  };

  const classes = useLinkStyles(
    getIsActive(active, props.dropdownItems)
      ? { active: true }
      : { active: false }
  );

  return (
    <div>
      <ListItem button className={classes.link} onClick={toggle}>
        <ListItemIcon>
          {isOpen && <ArrowDropDown />}
          {!isOpen && <ArrowRight />}
        </ListItemIcon>
        <ListItemText primary={props.name} />
      </ListItem>
      {isOpen &&
        props.dropdownItems.map((item) => (
          <DropdownItem
            key={item.id}
            id={item.id}
            name={item.name}
            onClick={item.onClick}
            closeDrawer={props.closeDrawer}
          />
        ))}
    </div>
  );
};

export default DropdownLink;
