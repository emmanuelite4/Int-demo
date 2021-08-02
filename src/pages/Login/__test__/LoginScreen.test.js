import { bef, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router";
import LoginScreen from "../Login";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import { render, fireEvent, screen } from "../../../test-utils";
import Input from "../../../components/Input/Input";
import { mount } from "enzyme";
import { ConnectedRouter } from "connected-react-router";
import configureAppStore, { history } from "../../../../application/configureStore";
import Button from "../../../components/Button/Button";

const store = configureAppStore();

describe("<LoginScreen />", () => {
  const component = mount(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <LoginScreen />
      </ConnectedRouter>
    </Provider>
  );

  it("renders with two element", () => {
    const inputList = component.find(Input);
    expect(inputList).toHaveLength(2);
  });
  it("renders with a button", () => {
    const inputList = component.find(Button);
    expect(inputList).toHaveLength(1);
  });
  it("renders email correctly", () => {
    let inputEl = component.find("input");
    fireEvent.change(Input[0], "test@test.com");
    fireEvent.change(input[1], "password ");
    imputEl;

    component.find("form").simulate("submit");
    expect(testValue.handleSubmit).toHaveBeenCalledTimes(1);
    // expect(testValue.handleSubmit).toHaveBeenCalledWith({
    //   email: testValue.email,
    //   password: testValue.password,
    // });
  });
});

// it.skip("navigate to signup when you click signup btn", () => {
//   let testLocation;
//   const { getByTestId } = render(
//     <Provider store={store}>
//       <MemoryRouter initialEntries={["/login"]}>
//         <LoginScreen />
//       </MemoryRouter>
//     </Provider>
//   );

//   const signupBtnEl = getByTestId("signup-btn");
//   act(() => {
//     signupBtnEl.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });
//   expect(testLocation.pathname).toBe("/signup");
// });
