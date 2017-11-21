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

export const orders = function(state = [], action) {
  console.log(action);
  switch (action.type) {
    case "CREATE_ORDER_CAR":
      // return [...state, action.payload];
      return { ...state, car: action.payload };
    case "CREATE_ORDER_ATTRACTION":
      return { ...state, attraction: action.payload };
    case "CREATE_ORDER_ATTRACTION_PACKAGE":
      return { ...state, attractionPackage: action.payload };
    default:
      return state;
  }
};
