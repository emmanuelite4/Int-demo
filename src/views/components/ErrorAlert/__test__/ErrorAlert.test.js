import React from "react";
import ErrorAlert from "../ErrorAlert";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("alert label renders with correct text", () => {
  const component = render(<ErrorAlert label="An error here" />);
  const labelEl = component.getByTestId("label");

  expect(labelEl.textContent).toBe("An error here");
  expect(labelEl.textContent).toMatchSnapshot();
});
