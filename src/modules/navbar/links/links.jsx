import React from 'react';
import DropdownLink from './dropdown-link';
import Link from './link';
import { useLinksStyles } from './links-styles';

const Links = (props) => {
  const classes = useLinksStyles();
  return (
    <div className={classes.links}>
      {props.links.map((link) => {
        if (!link.dropdownItems) {
          return (
            <Link
              key={link.id}
              id={link.id}
              name={link.name}
              onClick={link.onClick}
            />
          );
        }
        return (
          <DropdownLink
            key={link.id}
            id={link.id}
            name={link.name}
            dropdownItems={link.dropdownItems}
          />
        );
      })}
    </div>
  );
};

export default Links;
