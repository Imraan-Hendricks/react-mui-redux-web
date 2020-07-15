import { shallowEqual, useSelector } from 'react-redux';

const Backdrop = () => {
  const state = useSelector(
    (state) => state.components.backdrop.state,
    shallowEqual
  );

  return { isOpen: state.isOpen };
};

export default Backdrop;
