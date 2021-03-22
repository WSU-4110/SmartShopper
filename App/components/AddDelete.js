import React, { useState } from "react";
import { Alert, Keyboard, FlatList, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, View, TextInput} from "react-native";
import Items from "../components/Items.js";
import Add from "../components/Add.js";
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { ListItem } from 'react-native-elements';
import DataBaseComponent from "../components/DatabaseComponent.js";
import HistoryDataBase from "../../Screens/History.js";
import { MaterialIcons } from "@expo/vector-icons";

export default function AddDelete() {
  const [todos, setTodos] = useState([
    { text: "Milk", exp: "02 / 12 / 2021", price: "2", key: "1" },
    { text: "Egg", exp: "02 / 22 / 2021", price: "3", key: "2" },
    { text: "Bread", exp: "02 / 17 / 2021", price: "5", key: "3" },
  ]);

  //database instance
  var db = new DataBaseComponent();
  var hdb = new HistoryDataBase();

  const [visible, setVisible] = useState(false); //visible state that the Add component uses to switch between visible and invisible. True for visible, false otherwise

  const [saveVisible, setSaveVisible] = useState(false); //visible state that the Save component uses to switch between visible and invisible. True for visible, false otherwise

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
    //adding to our current list database
    todos.map((todos) => {
      db.add(todos.text, todos.exp, todos.price);
    });

    //adding to our history database
    todos.map((todos) => {
      hdb.add(todos.text, todos.exp, todos.price);
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
        {/**Animatable.View is incorporated to give animation to the search bar coming into view*/}
        {/**Icon is used to add an icon in the search bar*/}
          <View style={styles.header}>
            //This is where we have to add the useNativeDriver = false -Jacob
            <Animatable.View animation = 'slideInRight' duration = {1000} style={{height: 150, justifyContent: 'center', paddingHorizontal: 5}}>
              <Text style={styles.headerText}> Create Your List  </Text>

              <Animatable.View animation = 'slideInRight' duration = {1000} style = {{height: 50, marginTop: 0, paddingVertical: 20, backgroundColor: 'white',
              flexDirection: 'row', padding: 5, alignItems: 'center', flex: .3}}>
                <Animatable.View animation = 'fadeInRight'>
                  <Icon name = 'ios-search' style = {{fontSize: 12}}/>
                </Animatable.View>
              <TextInput placeholder = "Tap to Search" style = {{fontSize: 15, marginLeft: 15, flex: 1}}/>
              </Animatable.View>
            </Animatable.View>
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
          {/* ///////////////////////////////////////////////////////////////////////// */}

          {saveVisible ? (
            <View style={styles.saveWindow}>
              <Text style={styles.saveTitle}>Are you sure?</Text>
              <Text style={styles.saveMessage}>
                By pressing the "Save List" button, your list will be saved
                under MyList. Your items will also be saved to History.
              </Text>

              <TouchableOpacity
                style={styles.saveConfirmBtn}
                onPress={() => {
                  addToDB(todos);
                  setSaveVisible(false);
                }}
              >
                <Text>Save List</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => {
                  setSaveVisible(false);
                }}
              >
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
            </View>
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
          <MaterialIcons name="add-shopping-cart" size={30} color="white" />
        </TouchableOpacity>

        {/**Save "SAVE" button
         * This button saves the whole list into the database
         */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            setSaveVisible(true);
          }}
        >
          <MaterialIcons name="save-alt" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cancelBtn: {
    marginTop: 10,
    color: "coral",
    width: "100%", //width and height of the circle
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "coral",
    alignItems: "center",
    justifyContent: "center", //aligning the items in the center of the circle
  },
  cancelBtnText: {
    color: "coral",
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 10,  //padding if the footer is present
    //padding: 20,  //padding if there is no footer
    backgroundColor: "#1f1f1f",
  },
  header: {
    backgroundColor: "#252525",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    height: 10,
    //marginTop: -20,
    color: "white",
    //fontSize: 18,
    marginTop: 10,
    fontSize: 25,
    padding: 26,
    fontWeight: "bold",
    color: "coral",
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
    position: "absolute", //fixed at a certain part of the screen
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

  saveButton: {
    position: "absolute", //fixed at a cetain part of the screen
    zIndex: 11, //added z index of 11 so it is displayed on the top of all of the other components
    right: 20, //we added rigth and bottom because we want the button to be on the bottom right of the screen
    bottom: 200,
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
  saveConfirmBtn: {
    color: "#fff",
    backgroundColor: "coral",
    width: "100%", //width and height of the circle
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center", //aligning the items in the center of the circle
  },
  saveWindow: {
    position: "absolute",
    width: "90%",
    margin: "5%",
    top: 0,
    right: 10,
    zIndex: 11,
    padding: 20,
    height: 375,
    borderRadius: 10,
    backgroundColor: "#252525",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  saveTitle: {
    fontWeight: "bold",
    color: "lightgrey",
    textAlign: "center",
    fontSize: 30,
    marginBottom: 15,
    marginTop: 15,
  },
  saveMessage: {
    color: "lightgrey",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 40,
    marginTop: 30,
  },
  addContainer: {
    backgroundColor: "black",
  },
  listItems: {
    height: 700,
    paddingLeft: 3,
    paddingBottom: 500,
  },
});





