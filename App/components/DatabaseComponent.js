import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";
import { MaterialIcons } from "@expo/vector-icons";


const db = SQLite.openDatabase("grocery_Items.db");


class Items extends React.Component {

  state = {
    items: null,
  };

  componentDidMount() {
    this.update();
  }


  render() {
    const { items } = this.state;

    if (items === null || items.length === 0) {
      return null;
    }

  
    return (
      <View style={styles.sectionContainer}>
        {/* Map loop to iterate through the database and show them in a Text component */}
        {items.map(({ id, name, expirationDate, price }) => (
          <TouchableOpacity key={id} style={styles.itemcontainer}>
            {/* These are the values coming from the database */}

            <Text style={styles.itemTextName}>{name}</Text>
            <Text style={styles.itemText}>
              Expires on: <Text style={styles.bold}>{expirationDate}</Text>
            </Text>
            <Text style={styles.itemText}>
              Cost: <Text style={styles.bold}>{price}</Text>
            </Text>
          </TouchableOpacity>
        ))}





          {/**Footer View - but doesn't scroll with the page, stays in its starting position*/}
          <View style={styles.footer}></View>
          {/**Add item button - pulls up menu to add an item with 3 attributes */}
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
    );
  }

  //retrieving everything from the database, then putting them into an array and storing it in the state
  update() {
    db.transaction((tx) => {
      tx.executeSql(`select * from items;`, [], (_, { rows: { _array } }) =>
        this.setState({ items: _array })
      );
    });
  }
}

export function Add() {

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

    return(
      <View style={styles.content}>
      {/**Ternary Operator focusing on the visible state condition */}

      {/**{visible ? (If visible is true, do this command) : (if it is not true, do this command)} */}

      {/**Passing functions submitHandler and visibleToggleMain to the add component so they can be used outside of AddDelete*/}
      {visible ? <Add style={styles.addContainer} submitHandler={submitHandler} visibleToggleMain={visibleToggleMain} /> : null}
      {/* ///////////////////////////////////////////////////////////////////////// */}

      {saveVisible ? (
        <View style={styles.saveWindow}>
          <Text style={styles.saveTitle}>Are you sure?</Text>
          <Text style={styles.saveMessage}>
            By pressing the "Save List" button, your list will be saved under MyList. Your items will also be saved to History.
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
        <FlatList style={styles.listItems} data={todos} renderItem={({ item }) => <Items item={item} pressHandler={pressHandler} />} />
      </View>
    </View>
    )
}
export default class DataBaseComponent extends React.Component {
  state = {
    name: null,
  };

  //if there is not a table in the database, then create one
  componentDidMount() {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, name text, expirationDate text, price text);"
      );
    });
  }

  //adding the items to the database
  add(name, expirationDate, price) {
    // is name empty?
    if (name === null || name === "") {
      return false;
    }

    //attributes line up with the quesiton marks in the corresponding order
    db.transaction((tx) => {
      tx.executeSql(
        "insert into items (name, expirationDate, price) values (?, ?, ?)",
        [name, expirationDate, price]
      );
      tx.executeSql("select * from items", [], (_, { rows }) =>
        console.log(JSON.stringify(rows))
      );
    }, null);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>My List</Text>
        <Text style={{ textAlign: "center", marginBottom: 30, color: "coral" }}>
          This is your current working shopping list!
        </Text>
        <View style={styles.flexRow}></View>
        <ScrollView style={styles.listArea}>
          <Items />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  container: {
    backgroundColor: "#252525",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 30,
    color: "coral",
  },
  itemcontainer: {
    backgroundColor: "#252525",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  itemText: {
    color: "lightgrey",
    marginBottom: 5,
  },
  itemTextName: {
    color: "lightgrey",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 5,
  },

  flexRow: {
    flexDirection: "row",
  },

  listArea: {
    backgroundColor: "#1f1f1f",
    flex: 1,
    paddingTop: 16,
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
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
});
