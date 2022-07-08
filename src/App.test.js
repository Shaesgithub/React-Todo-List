import  {fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders placeholder text link", () => {
  render(<App />);
  let placeholderText = screen.getByPlaceholderText("Quick! Type something before you forget!");
  expect(placeholderText).toBeInTheDocument();
});

test("There should be a heading", () => {
  render(<App />);
  let todoHeader = screen.getByRole("heading");
  expect(todoHeader).toBeInTheDocument();
});

test("renders A Todo List text", () => {
  render(<App />);
  let headerText = screen.getByText("A Todo List");
  expect(headerText).toBeInTheDocument();
});

test("There should be one button in form", () => {
  render(<App />);
  let btn = screen.getAllByRole("button");
  expect(btn.length).toBe(1)
});

test("There should be one image in form", () => {
  render(<App />);
  let image = screen.getAllByRole("img");
  expect(image.length).toBe(1)
});