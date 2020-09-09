import React, { useState } from 'react';
import { Drawer, List } from '@material-ui/core';
import DropdownLink from './dropdown-link';
import Link from './link';
import MenuButton from './menu-button';
import { useDrawerStyles } from './drawer-styles';

const TemporaryDrawer = (props) => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open, event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    )
      return;

    setState(open);
  };

  const classes = useDrawerStyles();

  return (
    <div className={classes.root}>
      <MenuButton onClick={(event) => toggleDrawer(true, event)} />
      <Drawer
        anchor={'top'}
        open={state}
        onClose={(event) => toggleDrawer(false, event)}>
        <div
          className={classes.list}
          role='presentation'
          onKeyDown={(event) => toggleDrawer(false, event)}>
          <List>
            {props.links.map((link) => {
              if (!link.dropdownItems) {
                return (
                  <Link
                    key={link.id}
                    id={link.id}
                    name={link.name}
                    onClick={(event) => {
                      link.onClick();
                      toggleDrawer(false, event);
                    }}
                  />
                );
              }
              return (
                <DropdownLink
                  key={link.id}
                  id={link.id}
                  name={link.name}
                  dropdownItems={link.dropdownItems}
                  closeDrawer={(event) => toggleDrawer(false, event)}
                />
              );
            })}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
