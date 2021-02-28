import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Items({ pressHandler, item }) {
  return (
    <TouchableOpacity style={styles.itemBtn} onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>Name: {item.text}</Text>
      <Text style={styles.price}>Price: {item.price}</Text>
      <Text style={styles.exp}>Exp: {item.exp}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 5,
    color: "lightgrey",
  },
  price: {
    padding: 5,
    color: "lightgrey",
  },
  exp: {
    padding: 5,
    color: "lightgrey",
  },
  itemBtn: {
    backgroundColor: "#252525",
    width: "99%",
    borderRadius: 2,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});