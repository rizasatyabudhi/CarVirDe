export const cars = function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case "FETCH_CARS":
      return action.payload;
    default:
      return state;
  }
};
