import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createAsyncMiddleware } from 'redux-arc';
import asyncTask from './asyncTask';

import reducer from '../reducers';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(createAsyncMiddleware(asyncTask)))
);

export default store;
