import React, { Component} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, Keyboard } from 'react-native';
import CustomButton from './App code/CustomButton';//needed library for custom buttons to work
import AddDelete from "./App/components/AddDelete.js";
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable'
import { ListItem } from 'react-native-elements';


const listItems =  []
export default class App extends Component {

  state =
  {
    searchBarFocused: false
  }

  componentDidMount()
  {
    this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardWillShow = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow)
    this.keyboardWillHide = Keyboard.addListener('keyboardDidShow', this.keyboardWillHide)
  }

  keyboardDidShow = () =>
  {
    this.setState({searchBarFocused:false})
  }

  keyboardWillShow = () =>
  {
    this.setState({searchBarFocused: false})
  }

  keyboardWillHide = () =>
  {
    this.setState({searchBarFocused: true})
  }

  render(){

  return (
    //<AddDelete />; <--complete add component
    <View style={title.background}>
      <View style={{flex: 1}}>
          <Animatable.View animation = 'slideInRight' duration = {1000} style={{height: 150, justifyContent: 'center', paddingHorizontal: 5}}>
            <Text style={title.ShopperTitle}>SmartShopper</Text>

            <Animatable.View animation = 'slideInRight' duration = {1000} style = {{height: 50, marginTop: 0, paddingVertical: 20, backgroundColor: 'white',
            flexDirection: 'row', padding: 5, alignItems: 'center' }}>
              <Animatable.View animation = {this.state.searchBarFocused ? 'fadeInLeft' : 'fadeInRight'}>
                <Icon name = {this.state.searchBarFocused ? 'md-arrow-back' : 'ios-search'} style = {{fontSize: 12}}/>
              </Animatable.View>
              <TextInput placeholder = "Type here biiiitch" style = {{fontSize: 15, marginLeft: 15, flex: 1}}/>
            </Animatable.View>
          </Animatable.View>

          <CustomButton text='Add Item' color='#222222'/>
          <CustomButton text='View History' color='#222222'/>
          <CustomButton text='Sort Items' color='#222222'/>
          <CustomButton text='Expiration Dates' color='#222222'/>
      </View>

    
      <FlatList
        style = {{backgroundColor: this.state.searchBarFocused? ' rgba(0, 0, 0, 0.3' : 'black'}}
        
        data = {listItems}
        renderItem = {({item}) => <Text>{item}</Text>}
        keyExtractor = {(item, index) => index.toString()}
        
      />

    </View>
  );
  }
}

  const title = StyleSheet.create({
    background: {
      backgroundColor: 'coral',
      height:'100%',
      width: '100%',

    },
    ShopperTitle:{
      marginTop: 30,
      marginBottom: 10,
      textAlign:'center',
      fontSize:35,
      color:'white',
      //padding:20,
    }
    });


/*
    <View style={title.background}>
        <Text style={title.ShopperTitle}>SmartShopper</Text>
        <View style = {{height: 50, backgroundColor: 'white', paddingHorizontal: 20}}>
          <Icon name = 'ios-search'/>
        </View>

        */