import React from 'react';
import { Text, View, Button, Vibration, Platform, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

export default class Push extends React.Component {
  state = {
    expoPushToken: '',
    notification: {},
  };

  //For IOS and Android, asking for permission to send notifications
  //The answer is stored and it won't ask twice for the same device
  //Source from expo.com
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

      //Token is what defines each device and needs to be changed each time for this implementation
      //Explained further in the README.md
      token = await Notifications.getExpoPushTokenAsync();
      console.log(token);   //Displaying token in the terminal so it can be entered in the code for each device
      this.setState({ expoPushToken: token });
    }

    //Won't run on an emulator
    else {
      alert('Must use physical devices for Push Notifications');
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
  }

  _handleNotification = notification => {
    Vibration.vibrate();
    console.log(notification);
    this.setState({ notification: notification });
  };

  //Sending notification through code rather than the website
  sendPushNotification = async () => {
    //The next 3 lines are essential to get the notification to work
    const YOUR_PUSH_TOKEN = 'FjUxq4Ohw8XmDnaBWlSgsh';   //Taken from the terminal from 'data:'
                                                        //Must change if you want a notification on your
                                                        //device
    const message = {
      to: "ExponentPushToken[" + YOUR_PUSH_TOKEN +"]",
      sound: 'default',
      title: 'SmartShopper',
      body: 'Time to get some groceries!',
      data: { data: 'goes here' },
      _displayInForeground: true,
    };

    //Handled from the expo library and server
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
          <Button title={'Push Me'} onPress={() => this.sendPushNotification()} />
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
