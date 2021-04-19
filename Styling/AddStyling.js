import {StyleSheet} from "react-native";

export default StyleSheet.create({
    input: {
      marginBottom: 20,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomWidth: 1,
      borderBottomColor: "lightgrey",
      fontSize: 20,
      fontWeight: "bold",
    },
  
    addWindow: {
      position: "absolute",
      width: "90%",
      margin: "5%",
      top: 0,
      right: 10,
      zIndex: 11,
      padding: 20,
      height: 325,
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
  