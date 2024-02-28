import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  // Vars 
  var [Celsius, setCelsius] = useState('');
  var [Far, setFar] = useState('');

  // Fazendo a conversão
  function calcTemp(){
    if (Celsius != '') {
      Far = (9 * parseFloat(Celsius) + 160) / 5
      alert("Temperatura em Fahrenheit: " + Far)
    } else {
      alert("Informe a temperatura em Celsius!")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo de temperatura</Text>
      <TextInput style={styles.campo} placeholder='Digite uma temperatura em celsius' keyboardType='numeric' onChangeText={(Celsius)=>setCelsius(Celsius)} maxLength={4}></TextInput>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao} onPress={calcTemp}>Calcular</Text>
      </TouchableOpacity>
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
  titulo: {
    fontSize: 30,
    marginBottom: 10,
  },
  campo: {
    backgroundColor: 'lightgray',
    borderRadius: 30,
    margin: 10,
    padding: 10,
    fontSize: 16,
  },
  botao: {
    backgroundColor: 'green',
    padding: 10,
    marginTop: 10,
    borderRadius: 7,    
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,    
  }
});
