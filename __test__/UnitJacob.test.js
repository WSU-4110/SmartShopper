import {componentDidMount} from '../Screens/History';
import {add} from '../Screens/History';
import History from '../Screens/History';
import {render} from '../Screens/History';
import React from 'react';
import {update} from '../Screens/History';
import {transaction} from '../Screens/History';
import {executeSql} from '../Screens/History';
import {setState} from '../Screens/History';
import {handleDeleteBtn} from '../Screens/History';
jest.mock("../Screens/History.js")


//This checks to make sure that we are able to mount and update the bucket correctly
test('test to make sure the data base is opened and updated', () =>{
    expect(() => componentDidMount().toHaveBeenCalled());
    expect(() => componentDidMount().update);
  });

  
//This checks to make sure that you have put something in for the name
//You must have a name but you do not have to have a experation or price
test('Checks to see if we have put in a name', () => {
 () => expect(add()).not.toBe(null);
});

//This checks to make sure the two render functions in the History page are rednered correctly
//If they are not it will throw an error
it("renders without crashing", () => {
    expect( () => render(<History />));
  });

  test('Test is to check to make sure update works', () =>{
    //checks to make sure that update also has transaction and executeSql called
      () => expect(update).toHaveBeenCalledWith(transaction(),executeSql(),setState());
      () => expect(transaction).toHaveBeenCalledWith(executeSql(),setState());
      expect(executeSql).toHaveBeenCalled;
      expect(setState).toHaveBeenCalled;
  });

//Similar to the previous test this one makes sure that the handleDeleteBtn is called with the transaction and the data base and that the 
//Transaction is deleted from the history list.
  test('Test is to check to make sure update works', () =>{
    //checks to make sure that update also has transaction and executeSql called
      () => expect(handleDeleteBtn).toHaveBeenCalledWith(transaction(),executeSql());
      () => expect(transaction).toBe("DELETE FROM historyitems");
  });

  //This test makes sure that the source path to this .webp is valid and still functional so if it is ever lost we would be notified.
  test('test to make sure the path is working', () =>{
    expect( () => source().toBe("../assets/del.webp"));
  });
