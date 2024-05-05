import React, { useState } from "react";
import { View, Image, TextInput, Button, TouchableOpacity, Text, Alert } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import axios from "axios";
import styles from "./style";

const AddReport = ({ route, navigation }) => {
    const { token, user } = route.params
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')    

    const registerReport = () => {        
        if (!title || !description) {            
            Alert.alert(' ', 'Fill in all the information')
            return    
        }
        
        axios.put(`${process.env.API_URL}/report/register?token=${token}`, {
            title: title,
            description: description,
            image: 'react.png',
            latitude: '-21.8486977',
            longitude: '-46.896965',
            situation: 1,
            userId: user.id,
            status: 1,
            cityId: 1
        }).then(response => {                        
            navigation.navigate('Reports', { token, user })
        })
    }

    return (        
        <View style={styles.container}>            
            <Text style={styles.txt2}>Enter the title and description to register a new report</Text>            
            <TextInput style={styles.fields} placeholder='Title' placeholderTextColor='#D0BBFE' onChangeText={(title) => setTitle(title)} maxLength={100}></TextInput>
            <TextInput style={styles.fields} placeholder='Description' placeholderTextColor='#D0BBFE' onChangeText={(description) => setDescription(description)} maxLength={30}></TextInput>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txt} onPress={() => registerReport()}>                    
                    Register &nbsp; <FontAwesome6 name="circle-plus" size={18} color="#D0BBFE" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddReport