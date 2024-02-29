import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import DateField from 'react-native-datefield';
import React, { useState } from 'react';

export default function App() {

  // Vars 
  var [Nome, setNome] = useState('');
  var [Email, setEmail] = useState('');
  var [Telefone, setTelefone] = useState('');
  var [DataNasc, setDataNasc] = useState(new Date());
  const Data = []

  function IsEmail(email) {
    var emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
  }

  function cadastraUsuario() {
    // if (!IsEmail(Email)) {
    //   alert('E-mail inválido')
    //   return false
    // }    

    Data.push({
      'nome': Nome,
      'email': Email,
      'telefone': Telefone,
      'datanasc': DataNasc,
    })
    alert('Usuário cadastrado')
    limpar()
    console.log(Data)
  }

  const limpar = () => {   
    setNome('')
    setEmail('')
    setTelefone('')
    setDataNasc('')
  }

  function mostrarUsuarios() {
    let usuarios = ''
    let i = 0
    console.log(Data)
    Data.forEach(item => {
      i += 1;
      usuarios += 'Nome ' + i + ': ' + item.nome + '\n'
    });
    alert(usuarios)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de usuários</Text>
      <TextInput style={styles.campo} id='nome' placeholder='Digite o nome' value={Nome} onChangeText={(Nome) => setNome(Nome)} maxLength={100}></TextInput>
      <TextInput style={styles.campo} placeholder='Digite o e-mail' value={Email} onChangeText={(Email) => setEmail(Email)} maxLength={100}></TextInput>
      <TextInput style={styles.campo} placeholder='Digite o telefone' value={Telefone} onChangeText={(Telefone) => setTelefone(Telefone)} maxLength={30}></TextInput>
      <Text style={styles.titleData}>Data de nascimento:</Text>
      <DateField styleInput={styles.campoData} value={DataNasc} onSubmit={(DataNasc) => setDataNasc(DataNasc)} />
      <TouchableOpacity style={styles.botaoCasdastro}>
        <Text style={styles.textoBotao} onPress={cadastraUsuario}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoListar}>
        <Text style={styles.textoBotao} onPress={mostrarUsuarios}>Listar usuários</Text>
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
    borderRadius: 10,
    margin: 10,
    padding: 10,
    fontSize: 16,
    width: '90%',
  },
  tituloData: {
    fontSize: 15,
    flex: 1,
    justifyContent: 'flex-start'
  },
  campoData: {
    backgroundColor: 'lightgray',
    width: '30%',
    borderRadius: 8,
    borderColor: '#cacaca',
    borderWidth: 1,
    marginBottom: 20,
    margin: 5,
  },
  botaoCasdastro: {
    backgroundColor: 'green',
    padding: 10,
    marginTop: 10,
    borderRadius: 7,
  },
  botaoListar: {
    backgroundColor: 'orange',
    padding: 10,
    marginTop: 40,
    borderRadius: 7,
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
  }
});