import React from "react";
import * as Animatable from "react-native-animatable";
import styles from "../Styling/HistoryStyling";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
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

  //If there is not a table in the database, then create one
  componentDidMount() {
    hdb.transaction((tx) => {
      tx.executeSql("create table if not exists historyitems (id integer primary key not null, name text, expirationDate text, price text);");
    });
  }

  //Adding the items to the database
  add(name, expirationDate, price) {
    // is name empty?
    if (name === null || name === "") {
      return false;
    }

    //Attributes line up with the question marks in the corresponding order
    hdb.transaction((tx) => {
      tx.executeSql("insert into historyitems (name, expirationDate, price) values (?, ?, ?)", [name, expirationDate, price]);
      tx.executeSql("select * from historyitems", [], (_, { rows }) => console.log(JSON.stringify(rows)));
    }, null);
  }

  render() {
    return (
      //Content that is displayed when you are first open the page
      <View style={styles.container}>
        <Animatable.View animation="slideInRight" duration={900} style={{ marginTop: 5, height: 100, justifyContent: "center" }}>
          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => {
              handleDeleteBtn();
            }}
          >
            <MaterialIcons name="delete" size={50} color="white" />
          </TouchableOpacity>
          {/**Should we have History since it already says history in the status bar? */}
          <Text style={styles.heading}>History List</Text>

          {/**This text slides in just after the above line for an added affect */}
          <Animatable.View animation="slideInRight" duration={1000} style={{ marginTop: -13, justifyContent: "center" }}>
            <Text style={{ textAlign: "center", marginBottom: 25, color: "coral" }}>
              A list comprised of everything you've ever entered
            </Text>
          </Animatable.View>
        </Animatable.View>

        {/**Now individual items are being displayed*/}
        <View style={styles.flexRow}></View>
        <ScrollView style={styles.listArea}>
          <HistoryItems />
        </ScrollView>
      </View>
    );
  }
}

