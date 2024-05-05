import React, { useState } from "react";
import { View, Image, TextInput, Button, TouchableOpacity, Text, Alert } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from "axios";
import styles from "./style";

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const sendLogin = () => {        
        if (!username || !password) {            
            Alert.alert(' ', 'Fill in all the information')
            return    
        }
        
        axios.post(process.env.API_URL + '/user/login', {
            username: username,
            password: password,
        }).then(response => {            
            if (!response.data.access_token) {            
                Alert.alert(' ', response.data.message)
                return    
            }
            let token = response.data.access_token
            let user = response.data.user
            navigation.navigate('Reports', { token, user })
        })        
    }

    return (        
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../../assets/icon.png')} /> 
            <Text style={styles.title}>UrbanSOS</Text>
            <TextInput style={styles.fields} placeholder='Username' placeholderTextColor='#D0BBFE' onChangeText={(username) => setUsername(username)} maxLength={100}></TextInput>
            <TextInput style={styles.fields} placeholder='Password' placeholderTextColor='#D0BBFE' secureTextEntry={true} onChangeText={(password) => setPassword(password)} maxLength={30}></TextInput>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txt} onPress={() => sendLogin()}>                    
                    Login <AntDesign name="login" size={18} color="#D0BBFE" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login