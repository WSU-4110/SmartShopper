import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {ButtonDesign} from "./CustomButtonDesign.js";

const CustomButton = (props) => {
  const content = (
    <View style={[ButtonDesign.button, { backgroundColor: props.color }]}>
      <Text style={ButtonDesign.text}>{props.text}</Text>
    </View>
  );
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

export default CustomButton;
