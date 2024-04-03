import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Notification({navigation}) {
    return(
        <View>
            <Text> Tela de notificações </Text>
            <Button title="Home" onPress={()=>navigation.navigate('Home')} />
        </View>
    )
}