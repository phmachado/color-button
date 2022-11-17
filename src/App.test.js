import { render, screen, fireEvent } from "@testing-library/react";
// import { logRoles } from "@testing-library/dom";
import App, { replaceCamelWithSpaces } from "./App";

test("button has correct initial color and updates when clicked", () => {
  // useful to log roles of elements in your component
  // const { container } = render(<App />);
  // logRoles(container);

  render(<App />);

  // find an element with a role of button and text of 'Change to MidnightBlue'
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });

  // expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be MidnightBlue
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  // expect the button text to be 'Change to MediumVioletRed'
  expect(colorButton).toHaveTextContent("Change to MediumVioletRed");
});

test("initial conditions", () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("if when checkbox is checked the button disabled status changes", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button");

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("if button is gray when disabled", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: gray");
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: MediumVioletRed");

  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: gray");

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: MidnightBlue");
});

describe("spaces before camelcase capital letter", () => {
  test("if works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("if works for one inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("if works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
