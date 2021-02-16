import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground,SafeAreaView} from 'react-native';
import { Button, SearchBar } from 'react-native-elements';

export default function App() {
  
  console.log('hello');
  
  return (
    <View justifyContent='space-between' height='100%' style={back.container}>
      <Text style={styles.ShopperTitle}>Smart Shopper</Text>
      <Button  color="#f194ff" title='Create New List'/>
      <Button style={styles.buttonStuff} title='View Previous Lists'/> 
      <Button title='Expiration Date Tracker' />
      <Button title='Recommended Items' />
      <Button title='Notifications' />
      <Text>                                    </Text>
      <Text>                                    </Text>
      <Text>                                    </Text>
      <Text>Search bar maybe goes here maybe?</Text>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ShopperTitle:{
  textAlign:'center',
    fontSize:50,
    color:'#4e93e0',
  },
  SearchBarPadding:{
    width:'100%',
    height: 20,
    backgroundColor: 'white',
    borderRadius:8,
    },
    SearchBar:{
    width:'100%',
    height:'100%',
    paddingLeft:8,
    fontSize:8,
    },
    buttonStuff:
    {
      padding:10,
      backgroundColor:'red',
      color:'red',
    }
  });

  const back = StyleSheet.create({
    container: {
      backgroundColor: '#fff3e0',
    }
    });