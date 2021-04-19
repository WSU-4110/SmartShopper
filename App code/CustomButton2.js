import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

//Custom buttons for the homepage buttons
const CustomButton2 = (props) => {
  const content = (
    <View style={[styles.button2, { backgroundColor: props.color }]}>
      <Text style={styles.text2}>{props.text}</Text>
    </View>
  );
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};


const styles = StyleSheet.create({
  button2: {
    padding: 20, //can be adjustible to fit screen depending on how many buttons are present on the homescreen
    width: "100%",
    alignItems: "center",
  },
  text2: {
    color: "white",
    fontSize: 12,
  },
});


export default CustomButton2;

