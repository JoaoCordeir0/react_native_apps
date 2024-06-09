import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [curso, setCurso] = useState(null)

  const armazenar = (chave, valor) => {
    AsyncStorage.setItem(chave, valor)
  }

  const buscar = async(chave) => {
    let valor = await AsyncStorage.getItem(chave)
  }

  armazenar('1', 'Engenharia de software')

  return (
    <View style={styles.container}>
      <Text>Async Storage</Text>
      |<Text>Curso: { curso }</Text>
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
});
