import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";

import * as SQLite from "expo-sqlite";

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
          <TouchableOpacity
            key={id}
            style={{
              backgroundColor: "#fff",
              borderColor: "#000",
              borderWidth: 1,
              padding: 8,
            }}
          >
            <Text>
              {/* These are the values coming from the database */}
              {id}
              {name}
              {expirationDate}
              {price}
            </Text>
          </TouchableOpacity>
        ))}
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
        <Text style={styles.heading}>SmartShopper Database</Text>
        <View style={styles.flexRow}></View>
        <ScrollView style={styles.listArea}>
          <Items />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 30,
  },
  flexRow: {
    flexDirection: "row",
  },

  listArea: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    paddingTop: 16,
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
});
