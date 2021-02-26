import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Add({ submitHandler, visibleToggleMain }) {
  [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  const pressHandler = () => {
    submitHandler(text);
    setText("");
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
        color="lightgrey"
        placeholderTextColor="lightgrey"
        style={styles.input}
        placeholder="New item..."
        onChangeText={changeHandler}
        value={text}
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

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  addWindow: {
    position: "absolute",
    width: "90%",
    margin: "5%",
    top: 100,
    right: 10,
    zIndex: 11,
    padding: 20,
    height: 200,
    borderRadius: 10,
    backgroundColor: "#252525",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  addBtn: {
    color: "#fff",
    backgroundColor: "coral",
    width: "100%", //width and height of the circle
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center", //aligning the items in the center of the circle
  },
  cancelBtn: {
    marginTop: 10,
    color: "coral",
    width: "100%", //width and height of the circle
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "coral",
    alignItems: "center",
    justifyContent: "center", //aligning the items in the center of the circle
  },
  cancelBtnText: {
    color: "coral",
  },
});