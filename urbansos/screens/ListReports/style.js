import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',                 
    },
    flatList: {
        width: '95%',                
        marginBottom: 10,
        marginTop: 10
    },
    card: {
        width: '100%',
        marginBottom: 10,
        backgroundColor: '#1C1B20',        
    },
    cardText: {
        color: 'white',
    },
    txt: {
        color: '#D0BBFE',
        fontWeight: '900',
        textAlign: 'center',
        fontSize: 18,
    },
    btn: {
        backgroundColor: '#242329',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 7,
        width: 200,        
    },   
});

export default styles