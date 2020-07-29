import { useDispatch } from 'react-redux';
import rootOperations from './root-operations';

const Root = () => {
  const dispatch = useDispatch();

  const resetApp = () => dispatch(rootOperations.resetApp());

  return { resetApp };
};

export default Root;
