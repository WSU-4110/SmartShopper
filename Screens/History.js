import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


export default function History() {
  return (
    <View style={styles.background}>
      <Text style={styles.ShopperTitle}>History</Text>
      <FlatList
        data={[
          {key: 'Eggs'},
          {key: 'Wheat'},
          {key: 'Corn'},
          {key: 'Flan'},
          {key: 'Apple'},
          {key: 'Bananana'},
          {key: 'Yogurt'},
          {key: 'Tomato Soup'},
          {key: 'Rolls'},
          {key: 'Gravy'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      <Text style={styles.warn}>*****THIS IS A TEMP PAGE*****</Text>
    </View>
  );
}
<<<<<<< Updated upstream

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  background: {
    backgroundColor: 'coral',
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
});
=======
>>>>>>> Stashed changes
