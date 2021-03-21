import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import CustomButton from "../App code/CustomButton"; //needed library for custom buttons to work
import AddDelete from "../App/components/AddDelete.js";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("AddDelete");
  };
  const pressHandler1 = () => {
    navigation.navigate("Experation");
  };
  const pressHandler2 = () => {
    navigation.navigate("History");
  };
  return (
    <View style={title.background}>
      <Text style={title.ShopperTitle}>Smart Shopper</Text>
      <View>
        <Button title="Create Lists" onPress={pressHandler} color="coral" />
        <Button title="Experation" onPress={pressHandler1} color="coral" />
        <Button title="History" onPress={pressHandler2} color="coral" />
      </View>
    </View>
  );
}

const title = StyleSheet.create({
  background: {
    backgroundColor: "#1f1f1f",
    height: "100%",
    width: "100%",
  },
  ShopperTitle: {
    marginTop: 15,
    textAlign: "center",
    fontSize: 35,
    color: "white",
    padding: 20,
    fontWeight: "bold",
  },
});
