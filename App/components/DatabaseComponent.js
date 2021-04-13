import React from "react";
import { ScrollView, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
//import Items from "../components/Items.js";
import Constants from "expo-constants";

import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("Grocery_Items.db");

export default class DataBaseComponent extends React.Component {
  state = {
    name: null,
  };

  //if there is not a table in the database, then create one
  componentDidMount() {
    db.transaction((tx) => {
      tx.executeSql("create table if not exists items (id integer primary key not null, name text, expirationDate date, price text);");
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
      tx.executeSql("insert into items (name, expirationDate, price) values (?, ?, ?)", [name, expirationDate, price]);
      tx.executeSql("select * from items", [], (_, { rows }) => console.log(JSON.stringify(rows)));
    }, null);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>My List</Text>
        <Text style={styles.headingDiscp}>This is your current working shopping list!</Text>

        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={() => {
            deleteFromDB();
          }}
        >
          <Image source={require("./../../assets/del.webp")} style={styles.btnImage} />
        </TouchableOpacity>

        <View style={styles.flexRow}></View>
        <ScrollView style={styles.listArea}>
          <Items />
        </ScrollView>
      </View>
    );
  }
}

// this is suppose to sorts the date in a decending order but it can delete
const deleteFromDB = () => {
  db.transaction((tx) => {
    tx.executeSql("DELETE FROM items");
  });
};

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
      </View>
    );
  }

  //retrieving everything from the database, then putting them into an array and storing it in the state
  update() {
    db.transaction((tx) => {
      tx.executeSql(`select * from items;`, [], (_, { rows: { _array } }) => this.setState({ items: _array }));
    });
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  container: {
    backgroundColor: "coral",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 0,
    color: "white",
  },
  headingDiscp: {
    textAlign: "center",
    marginBottom: 30,
    color: "white",
  },
  btnImage: {
    height: 50,
    left: 7,
    width: 50,
  },
  deleteBtn: {
    marginLeft: 330,
  },
  itemcontainer: {
    backgroundColor: "#252525",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  itemText: {
    color: "white",
    marginBottom: 5,
  },
  itemTextName: {
    color: "white",
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
});
