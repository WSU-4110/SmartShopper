import {StyleSheet} from "react-native";

export default StyleSheet.create({
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
        color: "#fff",
        backgroundColor: "coral",
        width: "100%", //width and height of the circle
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center", //aligning the items in the center of the circle
    },
    container: {
      flex: 1,
    },
    content: {
      padding: 10, //padding if the footer is present
      //padding: 20,  //padding if there is no footer
      backgroundColor: "#1f1f1f",
    },
  
    header: {
      backgroundColor: "#252525",
      alignItems: "center",
      justifyContent: "center",
      height: 100
    },
  
    headerText: {
      height: 40,
      marginTop: -25,
      color: "white",
      //fontSize: 18,
      fontSize: 25,
      padding: 26,
      fontWeight: "bold",
      color: "coral",
    },
  
    footer: {
      position: "absolute",
      backgroundColor: "#1f1f1f",
      height: 120,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
    },

    addButton: {
      position: "absolute", //fixed at a certain part of the screen
      zIndex: 11, //added z index of 11 so it is displayed on the top of all of the other components
      left: 20, //we added rigth and bottom because we want the button to be on the bottom right of the screen
      bottom: 40,
      backgroundColor: "coral",
      width: 70, //width and height of the circle
      height: 70,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center", //aligning the items in the center of the circle
      elevation: 8,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
  
      elevation: 8,
    },
  
    recommendButton: {
      position: "absolute", //fixed at a cetain part of the screen
      zIndex: 11, //added z index of 11 so it is displayed on the top of all of the other components
      left: 159, //we added rigth and bottom because we want the button to be on the bottom right of the screen
      bottom: 40,
      backgroundColor: "coral",
      width: 70, //width and height of the circle
      height: 70,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center", //aligning the items in the center of the circle
      elevation: 8,
  
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
  
      elevation: 8,
    },

    recommendCancelBtn: {
      marginTop: -130,
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

    recommendWindow: {
      position: "absolute",
      width: "90%",
      margin: "5%",
      top: 0,
      right: 10,
      zIndex: 11,
      padding: 20,
      height: 450,
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

    saveButton: {
      position: "absolute", //fixed at a certain part of the screen
      zIndex: 11, //added z index of 11 so it is displayed on the top of all of the other components
      right: 20, //we added rigth and bottom because we want the button to be on the bottom right of the screen
      bottom: 40,
      backgroundColor: "coral",
      width: 70, //width and height of the circle
      height: 70,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center", //aligning the items in the center of the circle
      elevation: 8,
  
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
  
      elevation: 8,
    },

    saveConfirmBtn: {
      color: "#fff",
      backgroundColor: "coral",
      width: "100%", //width and height of the circle
      height: 50,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center", //aligning the items in the center of the circle
    },

    saveWindow: {
      position: "absolute",
      width: "90%",
      margin: "5%",
      top: 0,
      right: 10,
      zIndex: 11,
      padding: 20,
      height: 375,
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
    saveTitle: {
      fontWeight: "bold",
      color: "lightgrey",
      textAlign: "center",
      fontSize: 30,
      marginBottom: 15,
      marginTop: 15,
    },
    saveMessage: {
      color: "lightgrey",
      textAlign: "center",
      fontSize: 20,
      marginBottom: 40,
      marginTop: 30,
    },
    addContainer: {
      backgroundColor: "black",
    },
  
    listItems: {
      height: 700,
      paddingLeft: 3,
      paddingBottom: 500,
    },
  
    list:
    {
      height: 521
    }
  });
  