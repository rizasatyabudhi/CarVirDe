import React from "react";
import { shallow } from "enzyme";
import Footer from "../../components/modules/Footer";
import { CarCart } from "../../components/modules/CartCard";

test("should render Footer", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});
