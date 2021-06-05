import "@testing-library/jest-dom/extend-expect";
import Input from "../Input";
import { shallow } from "enzyme";

let component;
beforeEach(() => {
  component = shallow(<Input />);
});

describe("Input", () => {
  it("it renders with now default value", () => {
    let inputEl = component.find("input").at(0);
    expect(inputEl.prop("defaultValue")).toEqual(undefined);
  });
  it("label renders correctly properly", () => {
    component.setProps({ label: "First Name" });
    expect(component.find("label").text()).toEqual("First Name");
  });
  it("display no error if no error", () => {
    expect(component.find("small")).toHaveLength(0);
    component.setProps({ error: "This field is required" });
    expect(component.find("small")).toHaveLength(1);
    // component.unmount();
  });
  it("class changes for error", () => {
    // let component = shallow(<Input />));
    expect(component.find("input").at(0).hasClass("input-input ")).toBeTruthy();
    component.setProps({ error: "This field is required" });
    expect(
      component.find("input").at(0).hasClass("input-input input-input--error")
    ).toBeTruthy();
  });
});
