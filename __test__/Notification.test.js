import Notification from "../__test__/Notification";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

test("Setting state for handleNotification", () => {
  expect(Notification);
});

it("matches snapshot", () => {
  const match = console.log("Checking if console log works");
  expect(match).toMatchSnapshot();
});
