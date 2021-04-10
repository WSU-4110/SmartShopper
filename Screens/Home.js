import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { ForceTouchGestureHandler } from "react-native-gesture-handler";
import CustomButton from "../App code/CustomButton"; //needed library for custom buttons to work
import Add from "../App/components/AddDelete.js";
import Push from "../App/components/Push.js";
import CustomButton2 from "../App code/CustomButton2"; //needed library for custom buttons to work



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
  const pressHandler3 = () => {
    navigation.navigate("Push");
  };


  return (
    <View style={title.background}>
      <CustomButton2 text="Push" onPress={pressHandler3} color="coral"/>

      <Text style={title.ShopperTitle}>Smart Shopper</Text>

      <View style={title.allignButton}>
        <CustomButton text="Create Lists" onPress={pressHandler} color="coral" />
        <CustomButton text="Expiration" onPress={pressHandler1} color="coral" />
        <CustomButton text="History" onPress={pressHandler2} color="coral" />
      </View>
      <View style = {title.footer}>
      </View>
    </View>
  );
}



const title = StyleSheet.create({
  background: {
    backgroundColor: "coral",
    height: "100%",
    width: "100%",
  },
  ShopperTitle: {
    marginTop: -10,
    textAlign: "center",
    fontSize: 40,
    color: "white",
    padding: 25,
  },
  allignButton: {
    marginLeft: -10,
    marginRight: -10,
    marginTop: 30,
    padding: 10,
    justifyContent: "center",
  },
  footer:
  {
    //backgroundColor: "black",
    //height: "100%",
    //width: "100%",
  }
});