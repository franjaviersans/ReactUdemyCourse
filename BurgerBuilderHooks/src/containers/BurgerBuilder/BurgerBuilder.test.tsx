import React from "react";
import { UnregisterCallback, Href } from "history";
import { RouteComponentProps } from "react-router-dom";

import { configure, shallow, ShallowWrapper, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import BurgerBuilder from "./BurgerBuilder";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import { useSelector, useDispatch } from "react-redux";
import aux from "../../hoc/AuxHOC/AuxHOC";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockUseSelector = useSelector as jest.Mock;
const mockUseDispatch = useDispatch as jest.Mock;
const mockDispatch = jest.fn();

//This is to mock out the dependencies for react router
export function getMockRouterProps<P>(data: P) {
  const location = {
    hash: "",
    key: "",
    pathname: "",
    search: "",
    state: {},
  };

  const props: RouteComponentProps<P> = {
    match: {
      isExact: true,
      params: data,
      path: "",
      url: "",
    },
    location: location,
    history: {
      length: 2,
      action: "POP",
      location: location,
      push: () => {},
      replace: () => {},
      go: (num) => {},
      goBack: () => {},
      goForward: () => {},
      block: (t) => {
        const temp: UnregisterCallback = () => {};
        return temp;
      },
      createHref: (t) => {
        const temp: Href = "";
        return temp;
      },
      listen: (t) => {
        const temp: UnregisterCallback = () => {};
        return temp;
      },
    },
    staticContext: {},
  };

  return props;
}

//connect enzyme with react
configure({ adapter: new Adapter() });

describe("<BurgerBuilder />", () => {
  beforeEach(() => {
    mockUseDispatch.mockImplementation(() => mockDispatch);
  });

  //this is a unit test
  it("should render <BuildControls> when receiving ingredients", () => {
    const routerProps = getMockRouterProps<{}>({});
    mockUseSelector.mockImplementation(
      (callback) => callback({ burgerBuilder: { ingredients: { salad: 0 }, totalPrice: 0 }, auth: {} }) // This is our mocked state.
    );
    //render without deeply render the sub components
    const wrapper = mount(<BurgerBuilder {...routerProps} />);
    //what we whant to find using jest
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});
