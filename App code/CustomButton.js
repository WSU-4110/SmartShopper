import React, { Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

  const CustomButton = props => {
    const content=(
    <View style={[styles.button, {backgroundColor:props.color}]}> 
    <Text style={styles.text}>{props.text}</Text>
    </View>
    )
    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({

button:{
    padding: '15%', //can be adjustible to fit screen depending on how many buttons are present on the homescreen
    width: '100%',
    alignItems: 'center'
},
text:{
    color:'white',
    fontSize: 20,
}

});

export default CustomButton;
