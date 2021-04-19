import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import * as SQLite from "expo-sqlite";
import { useEffect } from "react";
import styles from "../../Styling/RecommendStyling";

const db = SQLite.openDatabase("Grocery_Items.db");

export default function Recommend({ submitHandler, setRecommendVisible }) {
  const [groceryItems, setGroceryItems] = useState([
    { id: 0, name: "", expirationDate: "", price: "", addIt: false },
  ]);

  //const pressHandler = (id) => {};

  useEffect(function effectFunction() {
    update();
  }, []);

  //Retrieving everything from the database, then putting them into an array and storing it in the state
  update = () => {
    db.transaction((tx) => {
      tx.executeSql(`select * from items;`, [], (_, { rows: { _array } }) =>
        setGroceryItems(_array)
      );
    });
  };

  //What is shown in the recycle window
  const recycleWhenPressed = () => {
    setRecommendVisible(false);
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
      <Text
        style={{
          textAlign: "center",
          marginBottom: 30,
          color: "coral",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
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

            <Text style={styles.itemText}>
              Previous Cost: <Text style={styles.bold}>{price}</Text>
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.doneBtn} onPress={recycleWhenPressed}>
        <Text>Recycle Items</Text>
      </TouchableOpacity>
    </View>
  );
}
