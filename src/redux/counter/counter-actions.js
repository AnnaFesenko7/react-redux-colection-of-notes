import { createAction } from '@reduxjs/toolkit';

// export const Increment = value => ({
//   type: actionsTypes.INCREMENT,
//   payload: value,
// });
export const Increment = createAction('counter/Increment');

// export const Decrement = value => ({
//   type: actionsTypes.DECREMENT,
//   payload: value,
// });

export const Decrement = createAction('counter/Decrement');
