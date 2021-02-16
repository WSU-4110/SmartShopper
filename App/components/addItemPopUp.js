import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput, //to input text
  ScrollView, //to be able to scoll through the data in the view
  TouchableOpacity, // to create buttons
} from "react-native";

export default class AddItemPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemArray: [],
      itemTitle: "",
    };
  }

  render() {
    return (
      <View style={styles.window}>
        <TextInput
          style={styles.textInput}
          placeholder="Item"
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        ></TextInput>

        <TextInput
          style={styles.textInput}
          placeholder="Expiration Date (--/--/----)"
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        ></TextInput>

        <TextInput
          style={styles.textInput}
          placeholder="Price"
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        ></TextInput>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  window: {
    position: "absolute",
    width: "90%",
    margin: "5%",
    top: 200,
    zIndex: 11,
    padding: 20,
    height: 300,
    borderRadius: 20,
    backgroundColor: "#252525",
  },
  textInput: {
    marginBottom: 5,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    width: "99%",
    color: "#fff",
    padding: 20,
    //backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#545454",
  },
  addButton: {
    position: "absolute",
    bottom: 10,
    right: 20,
    color: "#fff",
    backgroundColor: "coral",
    width: 160, //width and height of the circle
    height: 70,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center", //aligning the items in the center of the circle
    elevation: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});
