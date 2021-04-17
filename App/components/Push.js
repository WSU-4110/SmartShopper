import React from 'react';
import { Text, View, Button, Vibration, Platform, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
//import Button from "./Button"

export default class Push extends React.Component {
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

  componentDidMount() {
    this.registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    //this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = notification => {
    Vibration.vibrate();
    console.log(notification);
    this.setState({ notification: notification });
  };

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
  sendPushNotification = async () => {
    //the next 3 lines are essential to get the notification to work
    const YOUR_PUSH_TOKEN = 'FjUxq4Ohw8XmDnaBWlSgsh';
    const message = {
      to: "ExponentPushToken[" + YOUR_PUSH_TOKEN +"]",
      sound: 'default',
      title: 'BOOOYAH',
      body: 'Push it',
      data: { data: 'goes here' },
      _displayInForeground: true,
    };
    const response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  };

  render() {
    return (
      <View style={title.background}>
        <Text style={title.ShopperTitle}>Test Push</Text>
        <View style={title.allignButton}>
        <Button title={'Press to Send Notification'} onPress={() => this.sendPushNotification()} />

        </View>
      </View>
    );
  }
}

const title = StyleSheet.create({
  background: {
    backgroundColor: "#1f1f1f",
    height: "100%",
    width: "100%",
  },
  ShopperTitle: {
    marginTop: 25,
    textAlign: "center",
    fontSize: 40,
    color: "coral",
    padding: 25,
  },
  allignButton: {
    marginLeft: -10,
    marginRight: -10,
    padding: 10,
    height: 400,
    justifyContent: "center",
  },
});


/*  TO GET PUSH RECEIPTS, RUN THE FOLLOWING COMMAND IN TERMINAL, WITH THE RECEIPTID SHOWN IN THE CONSOLE LOGS

    curl -H "Content-Type: application/json" -X POST "https://exp.host/--/api/v2/push/getReceipts" -d '{
      "ids": ["YOUR RECEIPTID STRING HERE"]
      }'
*/
