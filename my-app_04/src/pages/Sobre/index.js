import React from "react";
import { View, Text, Button } from "react-native";

export default function Home({navigation}) {
    return(
        <View>
            <Button title="Home" onPress={()=>navigation.navigate('Home')} />
        </View>
    )
}