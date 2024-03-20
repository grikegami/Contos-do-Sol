import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import CampoEmail from './Components/campoemail';
import CampoSenha from './Components/camposenha';
import ConfirmaSenha from './Components/Confirmasenha';
import Cadastrar from './Components/Botaologin';


export default function App() {
  return (
    <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={styles.about} overScrollMode='always'>
    <View style={styles.container}>
      <View style={styles.grupo1}>

      
            <View style={styles.container1}>
              <Image source ={require('./assets/Logop.png')}style ={{width: 100, height: 100}}/>

            </View> 

            <View style={styles.container2}>
              <Text style={styles.sytleText}>Cadastre-se</Text>
              

            </View> 

      </View>
      <View style={styles.grupo2}>
      <View style={styles.container3}>
        <CampoEmail />
        <CampoSenha />
        <ConfirmaSenha />
        
      </View>
      <View style={styles.container6}>
      <Cadastrar />
      </View>
        <View>
          <Text>--------------------------------------------- OU ---------------------------------------------</Text>
        </View>
        <View style={styles.container4}>
              
              <Image source ={require('./assets/face.png')}style ={{width: 70, height: 70}}/>
              <Image source ={require('./assets/google.jpg')}style ={{width: 95, height: 95}}/>
              
              
            </View> 
            <View style={styles.container5}>
          <Text>já possui uma conta? </Text>
        </View>
    
      </View>

      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    
    
  },
  container1:{
    justifyContent:'start',
    
    alignItems:'start',
        
   
  },
  container2:{
    marginTop: 28,
    marginLeft: 20,
    maxHeight: 40,
    width: 200,
    
  },
  container3:{
    marginTop: 25,
    marginBottom: 35,
    padding: 20,

  },
  container4:{
    marginTop: 50,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems: 'center',
  },
 container5: {
  marginTop: 55,
  alignItems:'center',
 },
 container6: {
  width: 200,
  marginLeft: 100,
  marginBottom: 20,

 },
  grupo1:{
    flex:1,
    flexDirection: 'row',
    marginTop: 70,
    backgroundColor: '#FFF',
    justifyContent:'start',
    marginLeft: 20,
    width: 100,
    height: 150,
    maxHeight: 100,
  },
  
  sytleText:{
    fontSize: 30,
  },

});

//