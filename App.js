import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';
import CustomMultiPicker from "react-native-multiple-select-list";
import AddDelete from "./App/components/AddDelete.js";


export default class App extends React.Component {
  render() {
    return <AddDelete />;
  }
}

/*
//search bar
export default function App() {
  return (
    <View style={styles.container}>

      <CustomMultiPicker
        options={userList}
        search={true}
        multiple={true}
        placeholder={"Search"}
        placeholderTextColor={'#757575'}
        returnValue={"label"}
        callback={(res)=>{ console.log(res) }} //callback array of selected items
        rowBackgroundColor={"#eee"}
        rowHeight={40}
        rowRadius={5}
        searchIconName="ios-checkmark"
        searchIconColor="red"
        searchIconSize={30}
        iconColor={"#00a2dd"}
        iconSize={30}
        selectedIconName={"ios-checkmark-circle-outline"}
        unselectedIconName={"ios-radio-button-off-outline"}
        scrollViewHeight={130}
        />

      <Text>Failed attempt at a search bar</Text>

      <View style = {styles.bottomRight}>
          <Button title = "Look left"/>
      </View>

      <View style = {styles.bottomLeft}>
          <Button title = "Look right"/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const userList = {
  "123":"Lin Kuei",
  "124":"Savage Oppress",
  "125":"Shingeki no Kyojin",
  "126":"Shibuya",
  "127":"Anakin",
  "128":"Ba Sing Se"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomRight:
  {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: '37%',
    height: 80,
    color: "purple",
    //backgroundColor: '',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomLeft:
  {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: '37%',
    height: 80,
    //backgroundColor: '',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
*/


