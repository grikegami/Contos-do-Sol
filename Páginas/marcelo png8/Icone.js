import * as React from 'react';
import { Button} from 'react-native-paper';
import styles from './styles';

const Icone = () => (
  <Button icon={require('./img/5649483.png')} mode="" onPress={() => console.log('Pressed')}>
    Voltar
  </Button>
);

export default Icone;