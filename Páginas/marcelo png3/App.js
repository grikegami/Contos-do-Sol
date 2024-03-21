import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Leioult from './Leioult.js';
import Leioult1 from './Leioult1.js';
import Leioult2 from './Leioult2.js';
import { ScrollView } from 'react-native';
import Card from './Card';
import styles from './styles.js';
import Rodape from './Rodape.js';







export default function App() {
  return (
    <View style={styles.container}>
  
       <View style={styles.leioult}>

       <Leioult />
       <Leioult1 />
       <Leioult2 />
      
       </View>
     
       <ScrollView>
         
          <Card />
        
        </ScrollView>
      
      <StatusBar style="auto" />

      <View style={styles.Rodape}>
        
    <Rodape />
         
         
         
         </View>
      
        </View>
      
  );
}

