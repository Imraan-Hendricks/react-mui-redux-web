import { useCallback, useEffect } from 'react';
import useNavbar from '../modules/navbar/redux/navbar';

const ActiveNav = (active) => {
  const { setActive } = useNavbar();
  const setActiveCallback = useCallback(setActive, []);

  useEffect(() => {
    setActiveCallback(active);
  }, [setActiveCallback, active]);
};

export default ActiveNav;
