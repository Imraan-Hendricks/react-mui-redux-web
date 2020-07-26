import types from './backdrop-types';

const reset = () => ({
  type: types.RESET,
});

const setIsOpen = (open, openCounter) => {
  let isOpenUpdate;
  let openCounterUpdate;

  if (open) openCounterUpdate = openCounter + 1;
  else {
    if (openCounter > 0) openCounterUpdate = openCounter - 1;
    else openCounterUpdate = openCounter;
  }

  if (openCounterUpdate === 0) isOpenUpdate = false;
  else isOpenUpdate = true;

  return {
    type: types.SET_IS_OPEN,
    payload: {
      isOpen: isOpenUpdate,
      openCounter: openCounterUpdate,
    },
  };
};

export default { reset, setIsOpen };
