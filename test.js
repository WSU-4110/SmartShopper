import setTodos from './App/components/AddDelete';
import setText from './App/components/AddDelete';
import submitHandler from './App/components/AddDelete';
import visibleToggleMain from './App/components/AddDelete';
jest.mock("./App/components/AddDelete");

test("testing setTodos taking in a value and filtering to return NOT the value", () => {
    expect(setTodos(2)).not.toBe(2);
});
test("testing pressHandler to call setTodos", () => {
    const setTodos = jest.fn();
    const pressHandler = jest.fn(() => {
        setTodos();
    });
    pressHandler();
    expect(setTodos).toBeCalled();
});
test('testing isNaN to return true if input is not a number', () => {
    expect(isNaN("Test")).toBe(true);
});
test('testing if setText is called', () => {
    expect(setText).toBeCalled();
});
test('testing if visibleToggleMain is called', () => {
    expect(visibleToggleMain).toBeCalled();
});
test('testing how many times submitHandler is called', () => {
    expect(submitHandler).toHaveBeenCalledTimes(1);
});
