import React from "react";
import { shallow } from "enzyme";
import Footer from "../../components/modules/Footer";
import {
  CarCart,
  AttractionCart,
  AttractionPackageCart
} from "../../components/modules/CartCard";

test("should render CarCart", () => {
  const wrapper = shallow(<CarCart />);
  expect(wrapper).toMatchSnapshot();
});

test("should render AttractionCart", () => {
  const wrapper = shallow(<AttractionCart />);
  expect(wrapper).toMatchSnapshot();
});
test("should render AttractionPackageCart", () => {
  const wrapper = shallow(<AttractionPackageCart />);
  expect(wrapper).toMatchSnapshot();
});
