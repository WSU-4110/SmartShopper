import { StyleSheet } from "react-native";


export default StyleSheet.create({
  bold: { fontWeight: "bold" },

  container: {
    backgroundColor: "#252525",
    flex: 1,
    //paddingTop: Constants.statusBarHeight,
    paddingTop: 20,   //Shrinking the title and description just a bit
  },

  heading: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 30,
    color: "coral",
  },

  //Styling for the items that appear on the page
  historyitemcontainer: {
    backgroundColor: "#252525",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },

  historyItemText: {
    color: "lightgrey",
    marginBottom: 5,
  },

  historyItemTextName: {
    color: "lightgrey",
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

  deleteBtn: {
    marginLeft: 320,
    top: 5,
  }
});
