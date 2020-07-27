import { useState } from 'react';

const Toggle = (initial) => {
  const [open, setOpen] = useState(initial);
  const toggle = () => setOpen((state) => !state);

  return [open, toggle];
};

export default Toggle;
