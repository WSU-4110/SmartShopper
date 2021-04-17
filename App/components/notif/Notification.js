function Notification()
{
    _handleNotification = notification => {
        Vibration.vibrate();
        console.log(notification);
        this.setState({ notification: notification });
      };
}

export default Notification;