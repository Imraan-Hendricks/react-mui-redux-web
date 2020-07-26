import { useState, useCallback } from 'react';

const Toggle = (initial) => {
  const [open, setOpen] = useState(initial);
  const toggle = useCallback(() => setOpen((state) => !state), []);

  return [open, toggle];
};

export default Toggle;