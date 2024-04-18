import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Home({navigation}) {
    return(
        <View style={styles.container}>
            <Text></Text>
            <Text> Tela Home </Text>
            <Text></Text>
            <Button title="Cadastrar produto" onPress={() => navigation.jumpTo('Register') } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
});
  