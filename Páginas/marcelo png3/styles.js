import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'start',
      backgroundColor: 'black',
      },
    titulo:{
      fontSize: 50,
      fontWeight:'bold',
      color: 'red',
      marginTop: 30,
     },
     numero:{
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      color: 'white',
    },
    nome: {
      marginBottom: 10,
      color: 'white',
    },
    card: {
      flex: 1,
      marginTop: 50,
      backgroundColor: 'black',
    },
    Image:{
    
      fontSize: 10,
      fontWeight: 'bold',
      color: 'green',
      marginLeft: 10,
      },

      scrollview: {
        display: 'flex'
      },
      
      leioult: {
        marginBottom: 0,
        color: 'white',
        marginLeft: 70,
        marginEnd:50,
        flexDirection: 'row',
        marginTop:50,
      },
      Rodape:{
        display: 'flex',
        flexDirection: 'row',
        maxHeight: 'auto',
        width: 350,
        justifyContent:'space-between'
        
       },
      Botao1:{
        display: 'flex',
        flexDirection: 'row',
        maxHeight: 'auto',
        width: 400,
        justifyContent:'space-between',


      },


   
      });
    export default styles;