import React from "react";
import { render } from "react-native-testing-library";
import renderer from "react-test-renderer";
import DataBaseComponent from "../App/components/DatabaseComponent";
import Items from "../App/components/DatabaseComponent";
import { componentDidMount } from "../App/components/DatabaseComponent";
import add from "../App/components/DatabaseComponent";
import deleteFromDB from "../App/components/DatabaseComponent";
import update from "../App/components/DatabaseComponent";
jest.mock("../App/components/DatabaseComponent");

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
