import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import Items from "../components/Items.js";
import Add from "../components/Add.js";
import DataBaseComponent from "../components/DatabaseComponent.js";

export default function AddDelete() {
  const [todos, setTodos] = useState([
    { text: "Milk", exp: "02 / 12 / 2021", price: "$2", key: "1" },
    { text: "Egg", exp: "02 / 22 / 2021", price: "$3", key: "2" },
    { text: "Bread", exp: "02 / 17 / 2021", price: "$5", key: "3" },
  ]);

  //database instance
  var db = new DataBaseComponent();

  const [visible, setVisible] = useState(false); //visible state that the Add component uses to switch between visible and invisible. True for visible, false otherwise

  //function to call the setVisible function in order to change the visible state contents
  const visibleToggleMain = () => {
    setVisible(false); //setter for the visible state.
  };

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  // Input length checker (must be > 1)
  const submitHandler = (text, price, exp) => {
    if (isNaN(price)) {
      Alert.alert("Alert!", "Price must be a number", [
        { text: "OK", onPress: () => console.log("alert closed") },
      ]);
    } else if (text.length > 1) {
      setTodos((prevTodos) => {
        setVisible(false);
        return [
          { text, price, exp, key: Math.random().toString() },
          ...prevTodos,
        ];
      });
    } else {
      Alert.alert("Alert!", "Input must be over 1 character long", [
        { text: "OK", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  //add to database function.
  //Map is like a for each loop, adding each state to the databse all at once
  const addToDB = (todos) => {
    todos.map((todos) => {
      db.add(todos.text, todos.exp, todos.price);
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      {/**Content container */}
      <View style={styles.container}>
        {/**Header container */}
        <View style={styles.header}>
          <Text style={styles.headerText}> SMARTSHOPPER </Text>
        </View>
        {/**Container containing the list and the add list item window */}
        <View style={styles.content}>
          {/**Ternary Operator focusing on the visible state condition */}

          {/**{visible ? (If visible is true, do this command) : (if it is not true, do this command)} */}

          {/**Passing functions submitHandler and visibleToggleMain to the add component so they can be used outside of AddDelete*/}
          {visible ? (
            <Add
              style={styles.addContainer}
              submitHandler={submitHandler}
              visibleToggleMain={visibleToggleMain}
            />
          ) : null}
          {/** List container*/}
          <View style={styles.list}>
            {/**Actual List */}
            <FlatList
              style={styles.listItems}
              data={todos}
              renderItem={({ item }) => (
                <Items item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
        {/**Footer View */}
        <View style={styles.footer}></View>
        {/**Add "+" button */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setVisible(true);
          }}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

        {/**Save "SAVE" button
         * This button saves the whole list into the database
         */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            addToDB(todos);
          }}
        >
          <Text style={styles.saveButtonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 10,
    backgroundColor: "#2d2d2d",
  },
  header: {
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    marginTop: 30,
    color: "white",
    fontSize: 18,
    padding: 26,
  },
  footer: {
    position: "absolute",
    backgroundColor: "#222222",
    height: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  addButton: {
    position: "absolute", //fixed at a cetain part of the screen
    zIndex: 11, //added z index of 11 so it is displayed on the top of all of the other components
    right: 20, //we added rigth and bottom because we want the button to be on the bottom right of the screen
    bottom: 100,
    backgroundColor: "coral",
    width: 70, //width and height of the circle
    height: 70,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center", //aligning the items in the center of the circle
    elevation: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
  },

  saveButton: {
    position: "absolute", //fixed at a cetain part of the screen
    zIndex: 11, //added z index of 11 so it is displayed on the top of all of the other components
    right: 20, //we added rigth and bottom because we want the button to be on the bottom right of the screen
    bottom: 200,
    backgroundColor: "coral",
    width: 70, //width and height of the circle
    height: 70,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center", //aligning the items in the center of the circle
    elevation: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 24,
  },

  addContainer: {
    backgroundColor: "black",
  },
  listItems: {
    height: 670,
    paddingLeft: 3,
    paddingBottom: 500,
  },
});
