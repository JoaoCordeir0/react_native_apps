import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const Home = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleNavigate = () => {
        navigation.navigate('Display', { name, email, phone })
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TextInput 
                style={{borderWidth: 1, padding: 10, marginBottom: 10}}
                value={name}
                onChangeText={setName}
                placeholder="Informe o nome"
            />    
            <TextInput 
                style={{borderWidth: 1, padding: 10, marginBottom: 10}}
                value={email}
                onChangeText={setEmail}
                placeholder="Informe o email"
            /> 
            <TextInput 
                style={{borderWidth: 1, padding: 10, marginBottom: 10}}
                value={phone}
                onChangeText={setPhone}
                placeholder="Informe o telefone"
            /> 
            <Button title="Cadastrar" onPress={handleNavigate} />
        </View>
    )
}

export default Home