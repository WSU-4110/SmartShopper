# SmartShopper

## Purpose
#### The purpose of SmartShoper is to allow users to keep track of grocery goods they buy. Smart Shopper is a simplified version grocery tracker and allows for use inside supermarkets since it does not require internet connection for it to run.

## Functionality
#### SmartShopper allows users create list and add or delete grocery goods from it. Upon adding new product users can view the history of current as well as previous lists. To further personalize user's experience, optional attributes have been added such as enter price, expiration date, as well as check off items they own. Upon adding new items, user is also able to add recommended products (receommended products come from current/previously created lists).


## Push Notifications

Push.js

#### Installation
``` bash
expo install expo-notifications
expo install expo-constants
```

``` bash
import React from 'react';
import { Text, View, Button, Vibration, Platform, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
```

There are a couple things that you need to do in order to run a notification. The first is to create an expo account at https://expo.io, make a project and name it 'smartshopper' in the slug section, change the device token in your code editor, and lastly log into expo through the terminal through 'expo login'

For YOUR_PUSH_TOKEN, change it to your device token when you click the push button. Once you click on the push button, your device token will pop up in the terminal and that is what you can change it to.
``` bash
sendPushNotification = async () => {
    const YOUR_PUSH_TOKEN = 'put your device token here';
    const message = {
      to: "ExponentPushToken[" + YOUR_PUSH_TOKEN +"]",
      sound: 'default',
      title: 'Push',
      body: 'Hola',
      data: { data: 'goes here' },
      _displayInForeground: true,
    };
```
A possible error when trying to get a push notification is not commenting out
the line 'this._notificationSubscription. It throws an error in expo.
``` bash
componentDidMount() {
    this.registerForPushNotificationsAsync();
    //this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }
```

This will show the splash screen for our application.
Added Database Functionality
Added **History** Functionality

## Installing all dependencies 

Make sure to add them if you do not have them already!
``` bash
npm install react-native-animatable --save
npm install https://github.com/expo/react-native/archive/sdk-39.0.4.tar.gz
npm install @react-navigation/native
expo install react-native-gesture-handler react-native-reanimated
npm install react-navigation-stack @react-native-community/masked-view react-native-safe-area-context
expo install expo-sqlite
```
## Contributors
* Kristopher Covert
* Fardus Ahmed
* Adrian Tarnowski
* Jacob Schnur
* Justin Crawford
