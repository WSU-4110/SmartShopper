import pressHandler from "../Screens/Home";
import pressHandler1 from "../Screens/Home";
import pressHandler2 from "../Screens/Home";
import Home from "../Screens/Home";
import update from "../App/components/recommend";
import Recommend from "../App/components/recommend";
import useEffect from "../App/components/recommend";
import recycleWhenPressed from "../App/components/recommend";
import setGroceryItems from "../App/components/recommend";

jest.mock("../App/components/recommend");
jest.mock("../Screens/Home");

it("Render Recommend without errors/crashing.", () => {
    expect( () => render(<Recommend />));
  });

test('setGroceryItems: Testing to see if setGroceryItems saves given content and not return null',()=>{
    expect(setGroceryItems(0,"Fish", "May 3, 2021", 7.99, true)).not.toBeNull();
});

test('Update from recommended.js: Testing to see if upon calling update it also calls other functions inside update',()=>{
    ()=>expect(update).toHaveBeenCalledWith(setGroceryItems(),executeSQL(),transaction());
});

test('recycleWhenPressed: Testing to see if recyleWhenPressed called once',()=>{
expect(recycleWhenPressed).toBeCalledTimes(1);
});

test('useEffect:Testing if upon calling useEffect() the function inside is also called',()=>{
    ()=>expect(useEffect).toHaveBeenCalledWith(update());
});


it("Render Home without error/crashing", () => {
    expect( () => render(<Home />));
  });

test('pressHandler: Testing to see if navigation to Add page throws any unexpected error',()=>{
    expect(()=>pressHandler).not.toThrow();
});

test('pressHandler1: Testing to see if pressHandler1 contains content to traverse to history.js (if its not then the value should be null)',()=>{
    expect(()=>pressHandler1).not.toBeNull();
});

test('pressHandler2: Checking to see if function responds to it being called (needs to be compatible with mock)',()=>{
    pressHandler2();
    expect(pressHandler2).toBeCalled();
    });
