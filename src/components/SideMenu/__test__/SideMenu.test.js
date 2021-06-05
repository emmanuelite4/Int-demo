import "@testing-library/jest-dom/extend-expect";

import { shallow } from "enzyme";
import SideMenu, { FirstLastNameCap } from "../SideMenu";

// let component;
// beforeEach(() => {
//   component = shallow(<Input />);
// });

describe("SideMenu", () => {
  let initialState = { firstName: "Test", lastName: "Test", type: "customer" };
  let component = shallow(<SideMenu {...initialState} />);
  it("renders correctely", () => {
    component;
  });
  it("renders with a FirstLastNameCap Component", () => {
    expect(component.find(FirstLastNameCap)).toHaveLength(1);
  });
});
