import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import logger from 'redux-logger';
import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import counterReducer from './counter/counter-reducers';
import { timerReducer } from './timer/timer-reducers';
import todosReducer from '../redux/todos/todos-reducer';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

const rootReducer = combineReducers({
  counter: counterReducer,
  timer: timerReducer,
  todos: todosReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

// export const persistor = persistStore(store);
