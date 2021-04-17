import React, { useState } from "react";
import { Alert, Keyboard, FlatList, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, View, TextInput } from "react-native";
import Items from "../components/Items.js";
import Add from "../components/Add.js";
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";
import { ListItem } from "react-native-elements";
import DataBaseComponent from "../components/DatabaseComponent.js";
import HistoryDataBase from "../../Screens/History.js";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Recommend from "../components/recommend.js";
import styles from "../../Styling/AddDeleteStyling";


export default function AddDelete() {
  const [todos, setTodos] = useState([]);

  //database instance
  var db = new DataBaseComponent();
  var hdb = new HistoryDataBase();

  const [visible, setVisible] = useState(false); //visible state that the Add component uses to switch between visible and invisible. True for visible, false otherwise

  const [saveVisible, setSaveVisible] = useState(false); //visible state that the Save component uses to switch between visible and invisible. True for visible, false otherwise

  const [recommendVisible, setRecommendVisible] = useState(false); //visible state that the recommend component uses to switch between visible and invisible. True for visible, false otherwise

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
      Alert.alert("Alert!", "Price must be a number", [{ text: "OK", onPress: () => console.log("alert closed") }]);
    } else if (text.length > 1) {
      setTodos((prevTodos) => {
        setVisible(false);
        return [{ text, price, exp, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Alert!", "Input must be over 1 character long", [{ text: "OK", onPress: () => console.log("alert closed") }]);
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
          <Animatable.View animation="slideInRight" duration={900} style={{ height: 150, justifyContent: "center", paddingHorizontal: 5 }}>
            <Text style={styles.headerText}> Create Your List </Text>
          </Animatable.View>   
        </View>
        {/**Container containing the list and the add list item window */}
        <View style={styles.content}>
          {/**Ternary Operator focusing on the visible state condition */}

          {/**{visible ? (If visible is true, do this command) : (if it is not true, do this command)} */}

          {/**Passing functions submitHandler and visibleToggleMain to the add component so they can be used outside of AddDelete*/}
          {visible ? <Add style={styles.addContainer} submitHandler={submitHandler} visibleToggleMain={visibleToggleMain} /> : null}
          {/* ///////////////////////////////////////////////////////////////////////// */}

          {saveVisible ? (
            //Save confirmation window
            <View style={styles.saveWindow}>
              <Text style={styles.saveTitle}>Are you sure?</Text>
              <Text style={styles.saveMessage}>
                By pressing the "Save List" button, your list will be saved under MyList. Your items will also be saved to History.
              </Text>

              {/*Button for save operation */}
              <TouchableOpacity
                style={styles.saveConfirmBtn}
                onPress={() => {
                  addToDB(todos);
                  setSaveVisible(false);
                }}
              >
                <Text>Save List</Text>
              </TouchableOpacity>

              {/*Button to cancel save operation */}
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

          {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {recommendVisible ? (
            <View style={styles.recommendWindow}>
              <Recommend submitHandler={submitHandler} />
              <TouchableOpacity
                style={styles.recommendCancelBtn}
                onPress={() => {
                  setRecommendVisible(false);
                }}
              >
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          ) : null}
          {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/** List container*/}
          <View style={styles.list}>
            {/**Actual List */}
            <FlatList style={styles.listItems} data={todos} renderItem={({ item }) => <Items item={item} pressHandler={pressHandler} />} />
          </View>
        </View>

        {/*Footer View that houses the 3 buttons*/}
        <View style={styles.footer}>
          {/**Add "+" button */}
          <Animatable.View animation="slideInRight" duration={1000} style={{ height: 120, justifyContent: "center", paddingHorizontal: 5 }}>
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
            {/**"Recommended" button
           * This button takes from the databasecomponent.js database and recommends new items as the user makes a new list.
           */}
           
            <TouchableOpacity
              style={styles.recommendButton}
              onPress={() => {
                setRecommendVisible(true);
              }}
            >
              <MaterialCommunityIcons
                name="recycle-variant"
                size={28}
                color="white"
              />
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

