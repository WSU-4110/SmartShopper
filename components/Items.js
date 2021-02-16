import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Items({ pressHandler, item }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    color: "black",
    borderWidth: 1,
    borderRadius: 1,
    borderRadius: 10,
    backgroundColor: "lightblue",
  },
});
