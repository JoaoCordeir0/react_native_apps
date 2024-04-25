import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Display = ({ route }) => {
    const { name, email, phone } = route.params

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
           <Text>Nome: { name }</Text>
           <Text>E-mail: { email }</Text>
           <Text>Telefone: { phone }</Text>
        </View>
    )
}

export default Display