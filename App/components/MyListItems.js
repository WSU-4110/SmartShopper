import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

export default function MyListItems({ item }) {
  return (
    <View>
      <TouchableOpacity style={styles.itemBtn}>
        <Text style={styles.item}>
          {item.id}
          {item.name}
        </Text>
        <Text style={styles.price}>
          Price: <Text style={styles.bold}>${item.price}</Text>
        </Text>
        <Text style={styles.exp}>
          Exp: <Text style={styles.bold}>{item.expirationDate}</Text>
        </Text>
        <Text style={styles.exp}>
          Add?: {item.addIt ? <Text>True</Text> : <Text>False</Text>}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  item: {
    padding: 5,
    color: "lightgrey",
    fontWeight: "bold",
    fontSize: 25,
  },
  price: {
    padding: 5,
    color: "lightgrey",
  },
  exp: {
    padding: 5,
    color: "lightgrey",
  },
  delBtn: {
    backgroundColor: "#252525",
    width: 40,
    height: 40,
    left: 310,
    bottom: 55,
    marginBottom: -30,
    marginTop: -10,
    elevation: 4,
  },
  del: {
    width: 30,
    height: 30,
    top: 5,
    left: 5,
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