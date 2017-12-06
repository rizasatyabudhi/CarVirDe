import React from "react";
import { shallow } from "enzyme";
import Footer from "../../components/modules/Footer";
import AttractionCard from "../../components/modules/Attraction/AttractionCard";

test("should render AttractionCard", () => {
  const wrapper = shallow(<AttractionCard />);
  expect(wrapper).toMatchSnapshot();
});