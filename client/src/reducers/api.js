export const cars = function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case "FETCH_CARS":
      return action.payload;
    default:
      return state;
  }
};

export const attractions = function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case "FETCH_ATTRACTIONS":
      return action.payload;
    default:
      return state;
  }
};

export const orders = function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case "CREATE_ORDER_CAR":
      return { ...state, carOrder: action.payload };
    case "CREATE_ORDER_ATTRACTION":
      return { ...state, attractionOrder: action.payload };
    default:
      return state;
  }
};
