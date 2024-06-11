import React, { useState, useEffect } from "react"
import { View, Image, TextInput, Button, TouchableOpacity, Text, Alert, Platform } from "react-native"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import axios from "axios"
import styles from "./style"
import { API_URL } from "@env"
import * as ImagePicker from 'expo-image-picker'

const AddReport = ({ route, navigation }) => {
    const { token, user } = route.params
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)

    const pickImage = async () => {
        // Pedir permissão para acessar a câmera
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraPermissionsAsync()
            if (status !== 'granted') {
                alert('Sorry, we need camera permissions to make this work!')
                return
            }
        }
    
        // Abrir a câmera
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })
    
        if (!result.canceled) {
          setImage(result.assets[0].uri)
        }
    }

    const registerReport = () => {
        if (!title || !description) {
            Alert.alert(' ', 'Fill in all the information')
            return
        }

        axios.put(`${API_URL}/report/register?token=${token}`, {
            title: title,
            description: description,
            image: image,
            latitude: '-21.8486977',
            longitude: '-46.896965',
            situation: 1,
            userId: user.id,
            status: 1,
            cityId: 1
        }).then(response => {
            Alert.alert(' ', response.data.message, [
                {
                    text: 'Ok',
                    onPress: () => navigation.navigate('Reports', { token, user }),
                    style: 'cancel',
                },
            ])
        })
    }

    useEffect(() => {
        if (!image) {
            pickImage()  
        }        
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.txt2}>Enter the title and description to register a new report</Text>
            {image && (
                <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 20 }} />
            )}
            <TextInput style={styles.fields} placeholder='Title' placeholderTextColor='#D0BBFE' onChangeText={(title) => setTitle(title)} maxLength={100}></TextInput>
            <TextInput style={styles.fields} placeholder='Description' placeholderTextColor='#D0BBFE' onChangeText={(description) => setDescription(description)} maxLength={30}></TextInput>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txt} onPress={() => registerReport()}>
                    Register <FontAwesome6 name="circle-plus" size={18} color="#D0BBFE" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddReport