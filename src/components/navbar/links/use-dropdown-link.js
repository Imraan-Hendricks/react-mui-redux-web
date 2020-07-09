import { createRef, useState } from 'react';
import { useSelector } from 'react-redux';

const DropdownLink = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const ref = createRef();

  const active = useSelector((state) => state.components.navbar.state.active);

  const getIsActive = (active, dropdownItems) => {
    let isActive = false;
    dropdownItems.forEach((item) => {
      if (!isActive) {
        if (active === item.id) {
          isActive = true;
        }
      }
    });
    return isActive;
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return { active, anchorEl, ref, getIsActive, handleClick, handleClose };
};

export default DropdownLink;
