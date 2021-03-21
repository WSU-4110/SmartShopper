import React, { Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button, Vibration, Platform } from 'react-native';
import CustomButton from '../App code/CustomButton';//needed library for custom buttons to work
import AddDelete from "../App/components/AddDelete.js";
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

export default function Home({navigation}) {

  state = {
    expoPushToken: '',
    notification: {},
  };

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      this.setState({ expoPushToken: token });
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  /*
  componentDidMount() {
    this.registerForPushNotificationsAsync();
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  };
  */

  _handleNotification = notification => {
    Vibration.vibrate();
    console.log(notification);
    this.setState({ notification: notification });
  };



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
          <Button title='Create Lists' onPress ={pressHandler} color='#222222'/>
          <Button title='Experation' onPress ={pressHandler1} color='#222222'/>
          <Button title='History' onPress ={pressHandler2} color='#222222'/>
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
        marginTop:15,
        textAlign:'center',
          fontSize:35,
          color:'white',
          padding:20
      }
      });