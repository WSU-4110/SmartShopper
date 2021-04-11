import React from "react";
import { ScrollView, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";

const hdb = SQLite.openDatabase("HistoryItems.db");

class HistoryItems extends React.Component {
  state = {
    historyItems: null,
  };

  componentDidMount() {
    this.update();
  }

  render() {
    const { historyItems } = this.state;

    if (historyItems === null || historyItems.length === 0) {
      return null;
    }
    return (
      <View style={styles.sectionContainer}>
        {/* Map loop to iterate through the database and show them in a Text component */}
        {historyItems.map(({ id, name, expirationDate, price }) => (
          <TouchableOpacity key={id} style={styles.historyitemcontainer}>
            {/* These are the values coming from the database */}
            <Text style={styles.historyItemTextName}>
              <Text style={styles.bold}>{name}</Text>
            </Text>
            <Text style={styles.historyItemText}>
              Expired on: <Text style={styles.bold}>{expirationDate}</Text>
            </Text>
            <Text style={styles.historyItemText}>
              Cost: <Text style={styles.bold}>{price}</Text>
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  //retrieving everything from the database, then putting them into an array and storing it in the state
  update() {
    hdb.transaction((tx) => {
      tx.executeSql(`select * from historyitems;`, [], (_, { rows: { _array } }) => this.setState({ historyItems: _array }));
    });
  }
}
const handleDeleteBtn = () => {
  hdb.transaction((tx) => {
    tx.executeSql("DELETE FROM historyitems");
  });
};
export default class HistoryDataBase extends React.Component {
  state = {
    name: null,
  };

  //if there is not a table in the database, then create one
  componentDidMount() {
    hdb.transaction((tx) => {
      tx.executeSql("create table if not exists historyitems (id integer primary key not null, name text, expirationDate text, price text);");
    });
  }

  //adding the items to the database
  add(name, expirationDate, price) {
    // is name empty?
    if (name === null || name === "") {
      return false;
    }

    //attributes line up with the quesiton marks in the corresponding order
    hdb.transaction((tx) => {
      tx.executeSql("insert into historyitems (name, expirationDate, price) values (?, ?, ?)", [name, expirationDate, price]);
      tx.executeSql("select * from historyitems", [], (_, { rows }) => console.log(JSON.stringify(rows)));
    }, null);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.sortBtn}
          onPress={() => {
            handleDeleteBtn();
          }}
        >
          <Image source={require("../assets/del.webp")} style={styles.btnImage} />
        </TouchableOpacity>
        <Text style={styles.heading}>History Of Items Saved</Text>
        <Text style={{ textAlign: "center", marginBottom: 30, color: "coral" }}>This is a list comprised of everything you've ever entered.</Text>
        <View style={styles.flexRow}></View>
        <ScrollView style={styles.listArea}>
          <HistoryItems />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bold: { fontWeight: "bold" },
  container: {
    backgroundColor: "#252525",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  btnImage: {
    height: 50,
    left: 7,
    width: 50,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 30,
    color: "coral",
  },
  historyitemcontainer: {
    backgroundColor: "#252525",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  historyItemText: {
    color: "lightgrey",
    marginBottom: 5,
  },
  historyItemTextName: {
    color: "lightgrey",
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
