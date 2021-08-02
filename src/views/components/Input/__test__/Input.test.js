import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from "../Input";
import userEvent from "@testing-library/user-event";

test("input renders with with now value", () => {
  const { getByTestId } = render(<Input />);
  const inputEl = getByTestId("input");

  expect(inputEl.getValue).tobe = "";
});
