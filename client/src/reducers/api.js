export const auth = function(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case "API":
      return action.payload;
    default:
      return state;
  }
};
