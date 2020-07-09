import { useState } from 'react';
import { useSelector } from 'react-redux';

const DropdownLink = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const toggle = () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }
    setIsOpen(true);
  };

  return { active, isOpen, getIsActive, toggle };
};

export default DropdownLink;
