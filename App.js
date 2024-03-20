import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import ButtonContainer from './barraferramenta';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.barraFerramentas}>
      <ButtonContainer />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barraFerramentas: {
    justifyContent: "flex-end",
    alignItems: 'flex-end'
  }

});
