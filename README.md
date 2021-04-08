**SmartShopper**

## Search Bar

#### Installation

The necessary imports in AddDelete.js

``` bash
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList} from "react-native";
```

No npm installation necessary. The search bar revolves around Animatable.View animation, that gives it some of the movements on the screen.
It is mostly CSS work which can be found in the header container.

## Push Notifications

#### Installation
``` bash
expo install expo-notifications
expo install expo-constants
```The necessary imports

``` bash
import React from 'react';
import { Text, View, Button, Vibration, Platform, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
```

There are a few things that you need to do in order to run a notification. The first is to create an expo account at 'https://expo.io', make a project and name it 'smartshopper' in the slug section, change the device token in your code editor, and lastly log into expo through the terminal through 'expo login'

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
**An easy to use shopping app, designed to help shoppers at the grocery store.**

Progress: Add items implementation.

Current working version of the App.

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





notifications
expo install expo-notifications
