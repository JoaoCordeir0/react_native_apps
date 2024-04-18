import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

export default function About({navigation}) {
    return(
        <View style={styles.container}>
            <Text></Text>                        
            <Text style={styles.sys_name}>JAVA</Text>
            <Text>S2</Text>                     
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
    sys_name: {
        fontSize: 250,    
    }
});
  