import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { ForceTouchGestureHandler } from "react-native-gesture-handler";
import CustomButton from "../App code/CustomButton"; //needed library for custom buttons to work
import Add from "../App/components/AddDelete.js";
import {BGDesign} from "./BackGroundDesign.js";


export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Add");
  };
  const pressHandler1 = () => {
    navigation.navigate("Expiration");
  };
  const pressHandler2 = () => {
    navigation.navigate("History");
  };
  return (
    <View style={BGDesign.background}>
      <Text style={title.ShopperTitle}>Smart Shopper</Text>
      <View style={title.allignButton}>
        <CustomButton text="Create Lists" onPress={pressHandler} color="black" />
        <CustomButton text="Expiration" onPress={pressHandler1} color="black" />
        <CustomButton text="History" onPress={pressHandler2} color="black" />
      </View>
    </View>
  );
}

const title = StyleSheet.create({
  ShopperTitle: {
    marginTop: 25,
    textAlign: "center",
    fontSize: 40,
    color: "white",
    padding: 25,
  },
  allignButton: {
    marginLeft: -10,
    marginRight: -10,
    padding: 10,
    justifyContent: "center",
  },
});
