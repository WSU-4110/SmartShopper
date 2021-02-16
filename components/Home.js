import React from "react";
import { Button, ImageBackground, SafeAreaView, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require("../assets/cart.jpg")} style={styles.image}></ImageBackground>

      <Text style={styles.title}> Smart Shopper </Text>
      <Button title="Create A Shopping List" style={styles.button} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    fontFamily: "Roboto",
    fontWeight: "100",
    color: "black",
    bottom: 250,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
