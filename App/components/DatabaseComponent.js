import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList
} from "react-native";
import Constants from "expo-constants";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../../Styling/DbComponent";



import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("Grocery_Items.db");

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

    {/*Displaying database on the page */}
    return (
      <View style={styles.sectionContainer}>
        {/* Map loop to iterate through the database and show them in a Text component */}
        <View>
          {items.map(({ id, name, expirationDate, price }) => (
          <TouchableOpacity key={id} style={styles.itemcontainer}>
            {/* These are the values coming from the database*/}
            <Text style={styles.itemTextName}>{name}</Text>
            <Text style={styles.itemText}>
              Expires on: <Text style={styles.bold}>{expirationDate}</Text>
            </Text>
            <Text style={styles.itemText}>
              Cost: <Text style={styles.bold}>{price}</Text>
            </Text>
          </TouchableOpacity>
        ))}
        </View>
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

    //attributes line up with the question marks in the corresponding order
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
        <Animatable.View animation="slideInRight" duration={900} style={{ height: 100, justifyContent: "center", paddingHorizontal: 5 }}>
          <Text style={styles.headerText}> Your Saved List</Text>

          {/*Search bar animations */}
          <Animatable.View animation="slideInRight" duration={1000} style={{
              height: 10,
              marginTop: 20,
              paddingVertical: 0,
              backgroundColor: "white",
              flexDirection: "row",
              padding: 5,
              alignItems: "center",
              flex: 0.3,
            }}
          >
            <Animatable.View animation="fadeInRight">
              <Icon name="ios-search" style={{ fontSize: 12 }} />
            </Animatable.View>
            <TextInput placeholder="Tap to Search" style={{ fontSize: 15, marginLeft: 15, flex: 1 }} />
          </Animatable.View>
        </Animatable.View>

        <View style={styles.flexRow}></View>
        <ScrollView style={styles.listArea}>
          <Items />
        </ScrollView>
      </View>
    );
  }
}

