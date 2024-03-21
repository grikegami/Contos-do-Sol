import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}><View/>
      <StatusBar style="auto" />
      
      <Image source={require('./img/logo 1.png')}style={{width: 200, height: 200, }}/>
      
      </View>
  
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image:{
  width: 100,
  justifyContent:'center',
  alignItems: 'center',
   
  },




});
