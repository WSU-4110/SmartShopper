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
  ScrollView,
} from "react-native";
import DataBaseComponent from "../components/DatabaseComponent.js";
import HistoryDataBase from "../../Screens/History.js";
import Items from "../components/Items.js";
import * as SQLite from "expo-sqlite";
import { useEffect } from "react";
import { exp } from "react-native/Libraries/Animated/src/Easing";

const db = SQLite.openDatabase("Grocery_Items.db");

export default function Recommend({ submitHandler }) {
  const [groceryItems, setGroceryItems] = useState([
    { id: 0, name: "", expirationDate: "", price: "", addIt: false },
  ]);

  //const pressHandler = (id) => {};

  useEffect(function effectFunction() {
    update();
  }, []);

  //retrieving everything from the database, then putting them into an array and storing it in the state
  update = () => {
    db.transaction((tx) => {
      tx.executeSql(`select * from items;`, [], (_, { rows: { _array } }) =>
        setGroceryItems(_array)
      );
    });
  };

  const recycleWhenPressed = () => {
    groceryItems.map((groceryItems) => {
      if (groceryItems.name != null && !isNaN(groceryItems.price)) {
        submitHandler(
          groceryItems.name,
          groceryItems.price,
          "to be determined"
        );
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center", marginBottom: 30, color: "coral" }}>
        Items from previous list:
      </Text>
      <View style={styles.flexRow}></View>
      <ScrollView>
        {groceryItems.map(({ id, name, expirationDate, price, addIt }) => (
          <TouchableOpacity
            key={id}
            style={styles.itemcontainer}
            onPressItem={(id) =>
              setGroceryItems(id, name, expirationDate, price, true)
            }
          >
            {/* These are the values coming from the database */}
            <Text style={styles.itemTextName}>{name}</Text>
            <Text style={styles.itemTextName}>{id}</Text>
            <Text style={styles.itemText}>
              Expires on: <Text style={styles.bold}>{expirationDate}</Text>
            </Text>
            <Text style={styles.itemText}>
              Cost: <Text style={styles.bold}>{price}</Text>
            </Text>
            <Text style={styles.itemText}>
              Cost: <Text style={styles.bold}>{addIt}</Text>
            </Text>
            {addIt ? (
              <Text style={styles.bold}>True</Text>
            ) : (
              <Text style={styles.bold}>False</Text>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.doneBtn} onPress={recycleWhenPressed}>
        <Text>Recycle Items</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 450,
    marginBottom: 50,
  },
  doneBtn: {
    marginTop: 20,
    color: "#fff",
    backgroundColor: "coral",
    width: "100%", //width and height of the circle
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center", //aligning the items in the center of the circle
  },
  header: {
    backgroundColor: "#252525",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    marginTop: 0,
    fontSize: 25,
    padding: 0,
    fontWeight: "bold",
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
