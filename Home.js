import React, { Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button } from 'react-native';
import { ForceTouchGestureHandler } from 'react-native-gesture-handler';
import CustomButton from '../App code/CustomButton';//needed library for custom buttons to work
import AddDelete from "../App/components/AddDelete.js";

export default function Home({navigation}) {

   
      const pressHandler = () => {
        navigation.navigate('AddDelete')
      }
      const pressHandler1 = () => {
        navigation.navigate('Experation')
      }
      const pressHandler2 = () => {
        navigation.navigate('History')
      }
    return (
      <View style={title.background}>
        <Text style={title.ShopperTitle}>Smart Shopper</Text>
        <View style={title.allignButton}>
          <CustomButton text='Create Lists' onPress ={pressHandler} color='coral'/>
          <CustomButton text='Expiration' onPress ={pressHandler1} color='coral'/>
          <CustomButton text='History' onPress ={pressHandler2} color='coral'/>
        </View>
      </View>
    );
  }
  
    const title = StyleSheet.create({
      background: {
        backgroundColor: 'coral',
        height:'100%',
        width: '100%'
        
      },
      ShopperTitle:{
        marginTop:25,
        textAlign:'center',
          fontSize:40,
          color:'white',
          padding:25
      },
      allignButton:{
        marginLeft:45,
        marginRight:45,
        padding:10,
        justifyContent:'center',

      }
      });
