import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const Home = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [qtd, setQtd] = useState('')

    const handleNavigate = () => {
        navigation.navigate('Stock', { title, price, qtd })
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TextInput 
                style={{borderWidth: 1, padding: 10, marginBottom: 10}}
                value={title}
                onChangeText={setTitle}
                placeholder="Informe o titulo"
            />    
            <TextInput 
                style={{borderWidth: 1, padding: 10, marginBottom: 10}}
                value={price}
                onChangeText={setPrice}
                placeholder="Informe o preço"
            /> 
            <TextInput 
                style={{borderWidth: 1, padding: 10, marginBottom: 10}}
                value={qtd}
                onChangeText={setQtd}
                placeholder="Informe a quantidade"
            /> 
            <Button title="Cadastrar" onPress={handleNavigate} />
        </View>
    )
}

export default Home