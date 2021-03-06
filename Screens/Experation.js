import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';


export default function Experation() {
  return (
    <View style={styles.container}>
       <Text style={styles.ShopperTitle}>Experation</Text>
      <SectionList style={styles.sectionHeader}
        sections={[
          {title: 'January', data: ['Eggs- 10th', 'Milk -13th']},
          {title: 'February', data: ['Pizza -18th', 'Hamburger -20th', 'Spagetti -17th']},
          {title: 'March', data: ['Eggs- 10th', 'Milk -13th']},
          {title: 'April', data: ['Pizza -18th', 'Hamburger -20th', 'Spagetti -17th']},
          {title: 'May', data: ['Eggs- 10th', 'Milk -13th']},
          {title: 'June', data: ['Pizza -18th', 'Hamburger -20th', 'Spagetti -17th']},
          {title: 'July', data: ['Eggs- 10th', 'Milk -13th']},
          {title: 'August', data: ['Pizza -18th', 'Hamburger -20th', 'Spagetti -17th']},
          {title: 'September', data: ['Eggs- 10th', 'Milk -13th']},
          {title: 'October', data: ['Pizza -18th', 'Hamburger -20th', 'Spagetti -17th']},
          {title: 'November', data: ['Eggs- 10th', 'Milk -13th']},
          {title: 'December', data: ['Pizza -18th', 'Hamburger -20th', 'Spagetti -17th']},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader1}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
      <Text style={styles.warn}>*****THIS IS A TEMP PAGE*****</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'coral',
    color:'white',
  },
  sectionHeader1: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'black',
    color:'white',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  background: {
    backgroundColor: 'black',
    color:'white',
    height:'100%',
    width: '100%'
    
  },
  ShopperTitle:{
    marginTop:15,
    textAlign:'center',
      fontSize:35,
      color:'white',
      padding:20,
      backgroundColor: 'black',
  },
  warn: {
    textAlign:'center',
  }
})