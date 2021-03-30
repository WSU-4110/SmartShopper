<<<<<<< Updated upstream
import React, { Component} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CustomButton from './App code/CustomButton';//needed library for custom buttons to work
import AddDelete from "./App/components/AddDelete.js";
import Navigator from "./routes/homeStack";
=======
import Navigator from "./routes/homeStack";

>>>>>>> Stashed changes

export default function App() {
    return(
    <Navigator />
    );
}