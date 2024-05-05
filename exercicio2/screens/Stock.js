import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Stock = ({ route }) => {
    const { title, price, qtd } = route.params
    const [data, setData] = useState([])

    data.push({
        'title': title,
        'price': price,
        'qtd': qtd,
    })

    console.log(data)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
           <Text>Nome: { title }</Text>
           <Text>E-mail: { price }</Text>
           <Text>Telefone: { qtd }</Text>
        </View>
    )
}

export default Stock