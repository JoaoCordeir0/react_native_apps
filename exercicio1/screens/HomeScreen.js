import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

export default function Home({navigation}) {
    return(
        <View style={styles.container}>
            <Text></Text>                        
            <Text style={styles.sys_name}>Sistema do Cordeiro</Text>
            <Text></Text>            
            <Image style={styles.vectra_img} source={require('../assets/vectra.jpg')} />            
            <Text style={styles.sys_info}>Dev: Cordeiro</Text>
            <Text></Text>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
    vectra_img: {
        width: '95%',
        height: 600,
        marginBottom: 20,
    },
    sys_name: {
        fontSize: 30
    },
    sys_info: {
        fontSize: 15,    
    }
});
  