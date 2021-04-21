import React from 'react';

function View()
{
    return (
    <View style={title.background}>
        <Text style={title.ShopperTitle}>Test Push</Text>
        <View style={title.allignButton}>
        <Button title={'Press to Send Notification'} onPress={() => this.sendPushNotification()} />
        </View>
    </View>
    );
}

export default View;