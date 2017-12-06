import { addOrderCar } from "../../actions/actions";

test("should add car order to cart", () => {
  const action = addOrderCar({ tipe: "civic" });
  expect(action).toEqual({
    type: CREATE_ORDER_CAR,
    payload: {
      tipe: "civic"
    }
  });
});
