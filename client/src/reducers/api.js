export const cars = function(state = null, action = null) {
  console.log(action);
  switch (action.type) {
    case "FETCH_CARS":
      return action.payload;
    default:
      return state;
  }
};

export const attractions = function(state = null, action = null) {
  console.log(action);
  switch (action.type) {
    case "FETCH_ATTRACTIONS":
      return action.payload;
    default:
      return state;
  }
};
