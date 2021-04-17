import {StyleSheet} from "react-native";
import Constants from "expo-constants";


export default StyleSheet.create({
    bold: {
      fontWeight: "bold",
    },

    /*little sliver of space right below the white status bar*/
    container: {
      backgroundColor: "#252525",
      height: 100,
      marginTop: -10,
      flex: 1,
      paddingTop: Constants.statusBarHeight,
    },

    top: {
      backgroundColor: "#252525",
      alignItems: "center",
      justifyContent: "center",
      height: 100,
      marginBottom: 15,
      zIndex: 1,
    },

    heading: {
      fontSize: 26,
      fontWeight: "bold",
      textAlign: "center",
      paddingBottom: 30,
      color: "coral",
    },

    header: {
      backgroundColor: "#252525",
      alignItems: "center",
      justifyContent: "center",
      height: 100,
      marginBottom: 15,
    },

    headerText: {
      height: 40,
      marginTop: -80,
      fontSize: 25,
      padding: 26,
      fontWeight: "bold",
      color: "coral",
      //marginLeft: 55,
      textAlign: "center",
      //zIndex: 1,
    },

    itemcontainer: {
      backgroundColor: "#252525",
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
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

    flexRow: {
      flexDirection: "row",
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
