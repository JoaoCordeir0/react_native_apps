import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Linking, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, Button } from 'react-native';
import { FontAwesome, EvilIcons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';

export default function App() {
  // Vars 
  var [Msg, setMsg] = useState('');
  var [Phone, setPhone] = useState('');
  var [QrCodeVisible, setQrCodeVisible] = useState('');
  var [ModalVisible, setModalVisible] = useState('');

  const openZap = async () => {
    Linking.openURL('https://wa.me/5519978122192')
  }

  const register = async () => {
    setQrCodeVisible(!!Phone);
  }

  const clean = async () => {
    setQrCodeVisible(false);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TextInput style={styles.input} placeholder='Digite a mensagem'onChangeText={(Msg)=>setMsg(Msg)} ></TextInput>
      <TextInput style={styles.input} placeholder='Digite o telefone' onChangeText={(Phone)=>setPhone(Phone)} ></TextInput>
      <TouchableOpacity style={styles.btn}>
        <FontAwesome name="whatsapp" size={24} color="white" />
        <Text style={{marginLeft: 10, color: 'white', fontSize: 18}} onPress={register}>Exibir QrCode</Text>
      </TouchableOpacity>

      { QrCodeVisible && 
        <View style={{marginTop: 30}}> 
          <QRCode value={`https://wa.me/${Phone}?text=${Msg}`} size={200} /> 

          <TouchableOpacity style={styles.btnclean} onPress={clean}>
            <EvilIcons name="trash" size={55} color="red" />
          </TouchableOpacity>
        </View>
      }

      <Modal
        animationType="slide"
        transparent={true}
        visible={ModalVisible}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(!ModalVisible)}>
              <AntDesign name="closesquare" size={24} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.btnclean} onPress={() => setModalVisible(true)}>
        <FontAwesome5 name="pager" size={45} color="blue" />
      </TouchableOpacity>
    
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
  input: {
    backgroundColor: 'lightgray',
    borderRadius: 15,
    margin: 10,
    padding: 10,
    fontSize: 16,
    width: 300,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: 'green',
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 7, 
  },
  btnclean: {
    alignItems: 'center',
    padding: 15,
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 7, 
  },
  btnzap: {
    textAlign: 'center'
  },
  txtzap: {
    fontSize: 30,
    marginTop: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
