import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, Button, Alert } from "react-native";
import { Entypo } from '@expo/vector-icons';

export default function Register({ navigation }) {
    // Vars 
    var [UserName, setUserName] = useState('');
    var [UserUsername, setUserUsername] = useState('');
    var [UserPassword, setUserPassword] = useState('');    
    var [ModalVisible, setModalVisible] = useState(false);

    const registerClient = () => {
        if (UserName == '' || UserUsername == '' || UserPassword == '') {
            Alert.alert('Mensagem', 'Insira todas as informações')
            return    
        }
        Alert.alert('Mensagem', 'Usuário inserido com sucesso', [
            {
              text: 'Ok',
              onPress: () => setModalVisible(true),
              style: 'cancel',
            },
        ])
    }
    
    return (
        <View style={styles.container}>            
            <TextInput style={styles.field} placeholder='Informe a nome' value={UserName} onChangeText={(UserName) => setUserName(UserName)} maxLength={100}></TextInput>
            <TextInput style={styles.field} placeholder='Informe o nome de usuário' value={UserUsername} onChangeText={(UserUsername) => setUserUsername(UserUsername)} maxLength={20}></TextInput>
            <TextInput style={styles.field} secureTextEntry={true} placeholder='Informe a senha' value={UserPassword} onChangeText={(UserPassword) => setUserPassword(UserPassword)} maxLength={30}></TextInput>

            <TouchableOpacity style={styles.btnRegister}>
                <Text style={styles.txtBtn} onPress={() => registerClient()}> <Entypo name="add-user" size={18} color="white" /> &nbsp; Cadastrar</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={ModalVisible}>
                <View style={styles.container_modal}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTextTitle}>Informações do usuário cadastrado</Text>
                        <Text style={styles.modalText}>Nome: { UserName }</Text>
                        <Text style={styles.modalText}>Nome de usuário: { UserUsername }</Text>
                        <Text style={styles.modalText}>Senha: { UserPassword }</Text>                                                
                        <TouchableOpacity style={styles.btnModal} onPress={() => setModalVisible(!ModalVisible)}>
                            <Text>X</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
    },
    container_modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    field: {
        backgroundColor: 'lightgray',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        fontSize: 16,
        width: '90%',
    },
    btnRegister: {
        backgroundColor: 'green',
        padding: 10,
        marginTop: 10,
        borderRadius: 7,
        width: 200,
    },
    txtBtn: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
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
    modalTextTitle: {
        textAlign: 'left',
        fontSize: 20,
        marginBottom: 30
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    btnModal: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
});