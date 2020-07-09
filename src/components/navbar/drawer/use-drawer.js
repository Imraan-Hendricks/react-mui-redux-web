import { useState } from 'react';

const TemporaryDrawer = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open, event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  return { state, toggleDrawer };
};

export default TemporaryDrawer;
