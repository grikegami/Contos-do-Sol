import { StyleSheet } from "react-native";
import { endEvent } from "react-native/Libraries/Performance/Systrace";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
      
      
    },
    container1: {
      flex: 1,
      backgroundColor: '#fff',

    },

    titulo:{
      fontSize: 30,
      fontWeight:'bold',
      color: 'black',
      marginTop: 50,
      marginLeft: 90,
      
    },
    card:{
      backgroundColor: '#fff',
      width: 200,
      padding: 15,
      marginTop: 20,
      borderRadius: 8,
      borderWidth: 5,
      borderColor: '#333',
      borderStyle: 'solid',
      height: 100,
      marginLeft: 100,
       
  
    },
    numero:{
      fontSize: 20,
      fontWeight: 'bold',
    
      
  
  
    },
    nome:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      marginLeft: 30,
      alignItems: 'center',
      marginTop: 15,
      
      },
      Icone : {
      fontSize: 5,
      fontWeight: 'bold',
      color: 'black',
      marginLeft: 10,
      alignItems: 'center',
      marginTop: 200,
 
      },
      Image: {
        
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 50,
        marginLeft:20,
        height: 100,
        
        justifyContent: 'space-between',

        backgroundColor: '#fff '
        

    
        

      },


  });

  export default styles;
  