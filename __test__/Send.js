function Send()
{
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
}
