import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, btnModal, Alert } from "react-native";
import { Entypo } from '@expo/vector-icons';

export default function Register({ navigation }) {
    // Vars 
    var [Descricao, setDescricao] = useState('');
    var [Preco, setPreco] = useState('');
    var [Quantidade, setQuantidade] = useState('');
    var [Validade, setValidade] = useState('');
    var [ModalVisible, setModalVisible] = useState(false);

    const registerProduct = () => {
        if (Descricao == '' || Preco == '' || Quantidade == '' || Validade == '') {
            Alert.alert('Mensagem', 'Insira todas as informações')
            return    
        }
        Alert.alert('Mensagem', 'Produto inserido com sucesso', [
            {
              text: 'Ok',
              onPress: () => setModalVisible(true),
              style: 'cancel',
            },
        ])
    }
    
    return (
        <View style={styles.container}>            
            <TextInput style={styles.field} placeholder='Informe a descrição' value={Descricao} onChangeText={(Descricao) => setDescricao(Descricao)} maxLength={100}></TextInput>
            <TextInput style={styles.field} keyboardType='numeric' placeholder='Informe o preço' value={Preco} onChangeText={(Preco) => setPreco(Preco)} maxLength={20}></TextInput>
            <TextInput style={styles.field} keyboardType='numeric' placeholder='Informe a quantidade' value={Quantidade} onChangeText={(Quantidade) => setQuantidade(Quantidade)} maxLength={30}></TextInput>
            <TextInput style={styles.field} placeholder='Informe a validade' value={Validade} onChangeText={(Validade) => setValidade(Validade)} maxLength={30}></TextInput>

            <TouchableOpacity style={styles.btnRegister}>
                <Text style={styles.txtBtn} onPress={() => registerProduct()}> <Entypo name="add-to-list" size={18} color="white" /> &nbsp; Cadastrar</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={ModalVisible}>
                <View style={styles.container_modal}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTextTitle}>Informações do produto cadastrado</Text>
                        <Text style={styles.modalText}>Descrição: { Descricao }</Text>
                        <Text style={styles.modalText}>preço: { Preco }</Text>
                        <Text style={styles.modalText}>Quantidade: { Quantidade }</Text>
                        <Text style={styles.modalText}>Validade: { Validade }</Text>
                        <Text style={styles.modalText}>Valor em estoque do produto: { (parseFloat(Preco) * parseInt(Quantidade)).toFixed(2) }</Text>
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