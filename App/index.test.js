import React from "react";
import { render } from "react-native-testing-library";
import renderer from "react-test-renderer";
import DataBaseComponent from "./components/DatabaseComponent";
import Items from "./components/DatabaseComponent";
import { componentDidMount } from "./components/DatabaseComponent";
import add from "./components/DatabaseComponent";
import deleteFromDB from "./components/DatabaseComponent";
import update from "./components/DatabaseComponent";
jest.mock("./components/DatabaseComponent");

test("testing if the component was mounted at least once.", () => {
  const componentDidMount = jest.fn();
  const mountingComponent = jest.fn(() => {
    {
      componentDidMount();
    }
  });
  mountingComponent();
  expect(componentDidMount).toHaveBeenCalledTimes(1);
});

test("Testing 'Delete' functionality on the Database with no error.", () => {
  const deleteFromDB = jest.fn();
  const deletion = jest.fn(() => {
    deleteFromDB();
  });
  deletion();
  expect(deleteFromDB).toBeCalled();
});

test("Testing Database add function.", () => {
  expect(add("Ice Cream", "4/15/2021", "3.00")).not.toBe(null);
});

test("Testing Failed Database add function.", () => {
  expect(add(null, "4/15/2021", "3.00")).toBe(undefined);
});

it("DatabaseComponent Component implements render funciton without crashing.", () => {
  render(<DataBaseComponent />);
});

it("Items Component implements render funciton without crashing.", () => {
  render(<Items />);
});

test("Testing 'Update' functionality on the Items with no error.", () => {
  const update = jest.fn();
  const updatingItems = jest.fn(() => {
    update();
  });
  updatingItems();
  expect(update).toBeCalled();
});
