// import { createAction } from '@reduxjs/toolkit';

// export const Increment = value => ({
//   type: actionsTypes.INCREMENT,
//   payload: value,
// });
// export const ChangeDeadline = createAction(
//   'timer/ChangeDeadline'
// );

export const ChangeDeadline = value => ({
  type: 'timer/ChangeDeadline',
  payload: value,
});

// export const Decrement = createAction('counter/Decrement');
