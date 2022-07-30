export const timerReducer = (
  state = {
    selectedDate: null,
  },
  action
) => {
  switch (action.type) {
    case 'timer/ChangeDeadline':
      return { selectedDate: action.payload };
    default:
      return state;
  }
};
