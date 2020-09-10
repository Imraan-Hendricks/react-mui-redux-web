import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import backdropOperations from './backdrop-operations';

const Backdrop = () => {
  const { isOpen, openCounter } = useSelector(
    (state) => state.modules.backdrop,
    shallowEqual
  );

  const dispatch = useDispatch();

  const reset = () => dispatch(backdropOperations.reset());

  const setIsOpen = (open) =>
    dispatch(backdropOperations.setIsOpen(open, openCounter));

  return { isOpen, reset, setIsOpen };
};

export default Backdrop;
