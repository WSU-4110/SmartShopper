import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, ImageBackground, Alert, Keyboard, SafeAreaView, FlatList, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

import Header from "./components/Header";
import Items from "./components/Items";
import Add from "./components/Add";
import Home from "./components/Home";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Milk", key: "1" },
    { text: "Egg", key: "2" },
    { text: "Bread", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 1) {
      setTodos((prevTodos) => {
        return [{ text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS", "Item must be over 1 character long", [{ text: "OK", onPress: () => console.log("alert closed") }]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed");
      }}
    >
      <View style={styles.container}>
        <Header />
        {/* <Home />  */}
        <View style={styles.content}>
          <Add submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList data={todos} renderItem={({ item }) => <Items item={item} pressHandler={pressHandler} />} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
