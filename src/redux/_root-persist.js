import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { createMigrate } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const migrations = {
  0: (state) => {
    return {
      // migration clear out ex1 state
      ...state,
      ex1: undefined,
    };
  },
  1: (state) => {
    return {
      // migration to keep only ex1 state
      ex1: state.ex1,
    };
  },
};

const persistConfig = {
  key: 'model',
  version: -1,
  storage,
  whitelist: ['ex1'],
  stateReconciler: autoMergeLevel2,
  migrate: createMigrate(migrations, { debug: false }),
};

const persist = (reducer) => {
  return persistReducer(persistConfig, reducer);
};

export default persist;
