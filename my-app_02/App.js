import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  // Vars 
  var [Dolar, setDolar] = useState('');
  var [Real, setReal] = useState('');

  // Fazendo a conversão
  function calcConversao(){
    if (Dolar != '' && Real != '') {      
      alert(Real + " reais equivale a " + (parseFloat(Real) / parseFloat(Dolar)).toFixed(2) + " dolares")
    } else {
      alert("Informe os valores!")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversão de moeda</Text>
      <TextInput style={styles.campo} placeholder='Digite o valor do dolar' keyboardType='numeric' onChangeText={(Dolar)=>setDolar(Dolar)} maxLength={4}></TextInput>
      <TextInput style={styles.campo} placeholder='Digite a quantidade em reais' keyboardType='numeric' onChangeText={(Real)=>setReal(Real)} maxLength={4}></TextInput>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao} onPress={calcConversao}>Calcular</Text>
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
    width: 300,
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