import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Home({navigation}) {
    return(
        <View>
            <Button title="Sobre" onPress={()=>navigation.navigate('Sobre')} />

            <Button title="Cadastro" onPress={()=>navigation.navigate('Cadastro')} />
        </View>
    )
}