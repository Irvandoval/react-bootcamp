import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import appSlice from './reducers/appSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
];

const reducer = {
  root: rootReducer,
  [appSlice.name]: appSlice.reducer,
};

const store = configureStore({
  reducer,
  middleware,
});

export default store;
