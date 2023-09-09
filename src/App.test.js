import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react", () => {
  render(<App />);
  global.innerWidth = 390;
  global.dispatchEvent(new Event("resize"));
  const linkElement = screen.findAllByText(/1/i);
  expect(linkElement).toBeDefined();
});
