import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';






export default function App() {
    return (
      <View style={styles.container}>
     
        <View style={styles.card}>
        
        <Image source={require('./img/Screenshot_2023-05-15-13-50-39-085_com 1.png')}style={{width: 385, height: 200}}/> 
         <Text style={styles.numero}>Poesia do Tempo</Text>
         <Text style={styles.nome}> Araraquara,sp,Brasil</Text>
          
         

        <Image source={require('./img/Screenshot_2023-05-15-13-50-59-637_com 2.png')}style={{width: 385, height: 200}}/>
        <Text style={styles.numero}>Antiga Estaçao</Text>
        <Text style={styles.nome}> Araraquara,sp,Brasil</Text>
        


        <Image source={require('./img/Screenshot_2023-05-15-16-03-31-385_com 3.png')}style={{width: 385, height: 200}}/>
        <Text style={styles.numero}>Predio Centenario</Text>
        <Text style={styles.nome}> Araraquara,sp,Brasil</Text>
  
        
        </View>
          
          </View>
    );
}





