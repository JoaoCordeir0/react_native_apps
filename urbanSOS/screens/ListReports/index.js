import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, Alert } from "react-native";
import { Card, Text } from 'react-native-paper';
import styles from "./style";
import axios from "axios";
import { format } from "date-fns";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Reports = ({ route, navigation }) => {
    const { token, user } = route.params
    const [reports, setReports] = useState()

    const loadReports = async () => {
        const response = await axios.get(`${process.env.API_URL}/report/list/user/${user.id}`, {
            headers: {
                'x-access-token': token
            }
        })
        setReports(response.data)
    }

    const addReport = () => {
        navigation.navigate('Add report', { token, user })
    }
    
    loadReports()    
   
    return (
        <View style={styles.container}>            
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txt} onPress={() => addReport()}>                    
                    New report &nbsp; <FontAwesome6 name="file-circle-plus" size={18} color="#D0BBFE" />
                </Text>
            </TouchableOpacity>         
            <FlatList style={styles.flatList} data={reports} renderItem={({ item }) => (
                <Card style={styles.card}>                
                    <Card.Content>
                        <Text style={styles.cardText} variant="titleLarge" >{ item.title }</Text>
                        <Text style={styles.cardText} variant="bodyMedium">Status: {item.status}</Text>
                        <Text style={styles.cardText} variant="bodyMedium">Date: {format(new Date(item.createdAt), 'MMMM do, yyyy H:mma')}</Text>
                    </Card.Content>                
                </Card>
            )}/>
        </View>
    )
}

export default Reports