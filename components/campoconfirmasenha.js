import * as React from 'react';
import { TextInput } from 'react-native-paper';

const ConfirmaSenha = () => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      mode="outlined"
      label="Confirmar Senha"
      placeholder=""
      secureTextEntry
        right={<TextInput.Icon icon="eye" />}
    />
  );
};

export default ConfirmaSenha;