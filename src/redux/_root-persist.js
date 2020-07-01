import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'model',
  storage,
  whitelist: ['ex1'],
  stateReconciler: autoMergeLevel2,
};

const persist = (reducer) => {
  return persistReducer(persistConfig, reducer);
};

export default persist;
