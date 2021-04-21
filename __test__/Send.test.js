import React from "react";
import Send from "../__test__/Send";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

test("Send method", () => {
  expect(Send);
});
