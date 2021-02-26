import React, { Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CustomButton from '../demo/App code/CustomButton';


export default class App extends Component {

  render(){
  
  return (
    <View style={title.background}>
      <Text style={title.ShopperTitle}>SmartShopper</Text>
  
    <CustomButton text='Add Item' color='#222222'/>
    <CustomButton text='View History' color='#222222'/>
    <CustomButton text='Sort Items' color='#222222'/>
    <CustomButton text='Expiration Dates' color='#222222'/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
    padding:200
  }
  });

  const title = StyleSheet.create({
    background: {
      backgroundColor: 'coral',
      height:'100%',
      width: '100%'
      
    },
    ShopperTitle:{
      marginTop:15,
      textAlign:'center',
        fontSize:35,
        color:'white',
        padding:20
    }
    });
