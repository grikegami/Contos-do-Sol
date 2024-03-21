import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}><View/>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Contos Do Sol!!</Text>
      <View style={styles.card}>
      <Text style={styles.numero}>#001</Text>
      <Text style={styles.nome}>Contos Do Sol!</Text>
      <Image source={require('./img/desenho-de-arvore-e-montanha.webp')}style={{width: 200, height: 200}}/>
      
      </View>
  
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34ffcc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 50,
    fontWeight:'bold',
    color: 'red',
    marginTop: 40,
    
  },
  card:{
    backgroundColor: '#fff',
    width: 350,
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: '#333',
    borderStyle: 'solid',
    height: 100,

  },
  numero:{
    fontSize: 20,
    fontWeight: 'bold',
  
    


  },
  nome:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 10,
    
    

  },
});
