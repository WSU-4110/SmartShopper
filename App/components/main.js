import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput, //to input text
  ScrollView, //to be able to scoll through the data in the view
  TouchableOpacity, // to create buttons
} from "react-native";
import AddItemPopUp from "../components/addItemPopUp.js";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> SMARTSHOPPER </Text>
        </View>

        {this.state.visible ? <AddItemPopUp /> : null}

        {this.state.visible ? (
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => {
              this.setState({ visible: false });
            }}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        ) : null}

        <ScrollView style={styles.scrollContainer}></ScrollView>
        <View style={styles.footer}></View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            this.setState({ visible: true });
          }}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //full width and height
  },
  header: {
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    marginTop: 30,
    //height: 100,
    color: "white",
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
    backgroundColor: "lightgrey",
  },
  footer: {
    position: "absolute",
    backgroundColor: "#252525",
    height: 120,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    marginBottom: 5,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    width: "95%",
    color: "#fff",
    padding: 20,
    //backgroundColor: "#fff",
    borderRadius: 5,
  },
  addButton: {
    position: "absolute", //fixed at a cetain part of the screen
    zIndex: 11, //added z index of 11 so it is displayed on the top of all of the other components
    right: 20, //we added rigth and bottom because we want the button to be on the bottom right of the screen
    bottom: 150,
    backgroundColor: "coral",
    width: 70, //width and height of the circle
    height: 70,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center", //aligning the items in the center of the circle
    elevation: 8,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
  },
  cancelButton: {
    position: "absolute",
    left: 40,
    top: 440,
    zIndex: 11,
    color: "#fff",
    backgroundColor: "#252525",
    width: 160, //width and height of the circle
    height: 70,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center", //aligning the items in the center of the circle
    elevation: 8,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "coral",
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 20,
  },
});
