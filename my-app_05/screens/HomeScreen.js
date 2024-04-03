import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Home({navigation}) {
    return(
        <View>
            <Text> Tela Home </Text>
            <Button title="Abrir drawer" onPress={() => navigation.toggleDrawer()} />
            <Button title="Notificações" onPress={() => navigation.jumpTo('Notification') } />
        </View>
    )
}