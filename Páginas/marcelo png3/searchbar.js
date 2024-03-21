import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const BarraDePesquisa = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Searchbar
      placeholder="Buscar"
      onChangeText={setSearchQuery}
      value={searchQuery}
      
    />
  );
}

export default BarraDePesquisa;
