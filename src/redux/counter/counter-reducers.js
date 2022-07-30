import { combineReducers } from 'redux';
// import actionsTypes from './counter-types';
import { Increment, Decrement } from './counter-actions';
import { createReducer } from '@reduxjs/toolkit';

const valueReducer = createReducer(0, {
  [Increment]: (state, action) => state + action.payload,
  [Decrement]: (state, action) => state - action.payload,
});

// const valueReducer = (state = 0, { type, payload }) => {
//   switch (type) {
//     case actionsTypes.INCREMENT:
//       return state + payload;

//     case actionsTypes.DECREMENT:
//       return state - payload;

//     default:
//       return state;
//   }
// };

const stepReducer = (state = 10, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
