import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const CampoSenha = () => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      style = {styles.campotexto}
      mode="outlined"
      label="Senha"
      placeholder=""
      secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      
    />
  );
};

export default CampoSenha;
const styles = StyleSheet.create({
    campotexto: {
     
     marginBottom: 30,
     marginTop: 30,
      
      
    }});