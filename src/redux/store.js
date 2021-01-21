import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import BookReducer from './reducer/BookReducer'

const middlewares = [reduxThunk]

export const store = createStore(BookReducer, applyMiddleware(...middlewares))