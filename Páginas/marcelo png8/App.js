import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View,Image,style,Text} from 'react-native';
import Card from './Card';
import styles from './styles.js';
import Icone from './Icone.js';



 
export default function App() {
  return (
    
    <View style={styles.container}>
      

      <Text style={styles.nome}></Text>
      <Text style={styles.nome}></Text>

      <StatusBar style="auto" />

      <View style={styles.Image}>

      <Icone />

      <Image source={require('./img/Ellipse 13.png')}style={{width: 20, height: 20}}/>
      
      <Image source={require('./img/Ellipse 13.png')}style={{width: 20, height: 20}}/>
      
      <Image source={require('./img/Ellipse 13.png')}style={{width: 20, height: 20}}/>
      

      
      </View>
      
      
      <Card />
      
        </View>
          
         
  );
}

