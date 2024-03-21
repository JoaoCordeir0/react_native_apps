import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Modal } from "react-native";

export default function Home({navigation}) {
    // Vars 
    var [Nome, setNome] = useState('');
    var [Email, setEmail] = useState('');
    var [Telefone, setTelefone] = useState('');
    var [ModalVisible, setModalVisible] = useState(false);

    const cadastraUsuario = () => {
        setModalVisible(true)
    }

    return(
        <View>
            <TextInput style={styles.campo} id='nome' placeholder='Digite o nome' value={Nome} onChangeText={(Nome) => setNome(Nome)} maxLength={100}></TextInput>
            <TextInput style={styles.campo} placeholder='Digite o e-mail' value={Email} onChangeText={(Email) => setEmail(Email)} maxLength={100}></TextInput>
            <TextInput style={styles.campo} placeholder='Digite o telefone' value={Telefone} onChangeText={(Telefone) => setTelefone(Telefone)} maxLength={30}></TextInput>

            <Button title="Cadastrar" onPress={cadastraUsuario} />
            <Button title="Home" onPress={()=>navigation.navigate('Home')} />

            <Modal
                animationType="slide"
                transparent={true}
                visible={ModalVisible}>
                <View style={styles.container}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}> Nome: {Nome} </Text>
                        <Text style={styles.modalText}> E-mail: {Email} </Text>
                        <Text style={styles.modalText}> Telefone: {Telefone} </Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => setModalVisible(false)}>
                            <Text>X</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
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
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
    