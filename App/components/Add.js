import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "../../Styling/AddStyling";

export default function Add({ submitHandler, visibleToggleMain }) {
  [text, setText] = useState("");
  [price, setPrice] = useState("");
  [exp, setExp] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  const changeHandler3 = (val) => {
    setExp(val);
  }

  const changeHandler2 = (val) => {
    setPrice(val);
  };

  const pressHandler = () => {
    submitHandler(text, price, exp);
    setExp("");
    setText("");
    setPrice("");
  };

  const setVis = () => {
    {
      visibleToggleMain();
    }
  };

  return (
    <View style={styles.addWindow}>
      {/**Passing functions to the add component */}
      <TextInput
        color="white"
        placeholderTextColor="#5c5c5c"
        style={styles.input}
        placeholder="New item..."
        onChangeText={changeHandler}
        value={text}
      />
      <TextInput
        color="white"
        placeholderTextColor="#5c5c5c"
        style={styles.input}
        placeholder="Price..."
        onChangeText={changeHandler2}
        value={price}
      />
      <TextInput
        color="white"
        placeholderTextColor="#5c5c5c"
        style={styles.input}
        placeholder="Exp: MM/DD/YYYY"
        onChangeText={changeHandler3}
        value={exp}
      />
      <TouchableOpacity style={styles.addBtn} onPress={pressHandler}>
        <Text>Add Item</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelBtn} onPress={setVis}>
        <Text style={styles.cancelBtnText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}