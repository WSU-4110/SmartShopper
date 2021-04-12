import React, { Component} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TouchableOpacity, Vibration, Platform } from 'react-native';
import CustomButton from './App code/CustomButton';//needed library for custom buttons to work
import AddDelete from "./App/components/AddDelete.js";
import Navigator from "./routes/homeStack";
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

export default function App() {
    return(
    <Navigator />
    );
}
