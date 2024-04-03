import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, Button } from "react-native";

export default function Home({ navigation }) {
    // Vars 
    var [Nome, setNome] = useState('');
    var [Email, setEmail] = useState('');
    var [Telefone, setTelefone] = useState('');
    var [ModalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro de usuários</Text>
            <TextInput style={styles.campo} id='nome' placeholder='Digite o nome' value={Nome} onChangeText={(Nome) => setNome(Nome)} maxLength={100}></TextInput>
            <TextInput style={styles.campo} placeholder='Digite o e-mail' value={Email} onChangeText={(Email) => setEmail(Email)} maxLength={100}></TextInput>
            <TextInput style={styles.campo} placeholder='Digite o telefone' value={Telefone} onChangeText={(Telefone) => setTelefone(Telefone)} maxLength={30}></TextInput>

            <TouchableOpacity style={styles.botaoCasdastro}>
                <Text style={styles.textoBotao} onPress={() => setModalVisible(true)}>Cadastrar</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={ModalVisible}>
                <View style={styles.container}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTextTitle}>Informações do usuário</Text>
                        <Text style={styles.modalText}>Nome: { Nome }</Text>
                        <Text style={styles.modalText}>Email: { Email }</Text>
                        <Text style={styles.modalText}>Telefone: { Telefone }</Text>
                        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!ModalVisible)}>
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
    titulo: {
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center',
        marginTop: 10,
    },
    campo: {
        backgroundColor: 'lightgray',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        fontSize: 16,
        width: '90%',
    },
    botaoCasdastro: {
        backgroundColor: 'green',
        padding: 10,
        marginTop: 10,
        borderRadius: 7,
        width: 200,
    },
    textoBotao: {
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
});