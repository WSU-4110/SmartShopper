import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
      height: 425,
      marginBottom: 50,
      backgroundColor: "#252525",
    },

    doneBtn: {
      marginBottom: 90,
      color: "#fff",
      backgroundColor: "coral",
      width: "100%", //width and height of the circle
      height: 50,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center", //aligning the items in the center of the circle
    },

    header: {
      backgroundColor: "#252525",
      alignItems: "center",
      justifyContent: "center",
    },

    headerText: {
      marginTop: 0,
      fontSize: 25,
      padding: 0,
      fontWeight: "bold",
      color: "coral",
    },

    itemcontainer: {
      backgroundColor: "#1f1f1f",
      borderRadius: 5,
      padding: 10,
      marginBottom: 5,
    },

    itemText: {
      color: "lightgrey",
      marginBottom: 5,
    },

    itemTextName: {
      color: "lightgrey",
      fontWeight: "bold",
      fontSize: 25,
      marginBottom: 5,
    },

    listArea: {
      backgroundColor: "#1f1f1f",
      flex: 1,
      paddingTop: 16,
    },

    sectionContainer: {
      marginBottom: 16,
      marginHorizontal: 16,
    },
  });
