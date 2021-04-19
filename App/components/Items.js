import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import styles from "../../Styling/ItemStyling";

//Pass in presshandler here
export default function Items({ pressHandler, item }) {
  return (
    <View>
      {/**Each individual item displayed and how it will appear */}
      <TouchableOpacity style={styles.itemBtn}>
        <Text style={styles.item}>{item.text}</Text>
        <Text style={styles.price}>
          Price: <Text style={styles.bold}>${item.price}</Text>
        </Text>
        <Text style={styles.exp}>
          Exp: <Text style={styles.bold}>{item.exp}</Text>
        </Text>
      </TouchableOpacity>
    <TouchableOpacity
        style={styles.delBtn}
        onPress={() => pressHandler(item.key)}
      >
        <Image source={require("./../../assets/del.webp")} style={styles.del} />
      </TouchableOpacity>
    </View>
  );
}

