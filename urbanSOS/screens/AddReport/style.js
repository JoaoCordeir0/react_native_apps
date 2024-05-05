import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',         
    },
    icon: {
        marginTop: -100,
        maxWidth: 200,
        maxHeight: 200,
    },
    title: {
        fontSize: 35,
        marginBottom: 30,
        color: '#d0bbfe'
    },  
    fields: {                
        borderRadius: 10,
        borderColor: '#D0BBFE',
        borderWidth: 2,
        margin: 10,
        padding: 10,
        fontSize: 16,
        width: '90%',
        color: '#fff',        
    },
    btn: {
        backgroundColor: '#242329',
        padding: 10,
        marginTop: 10,
        borderRadius: 7,
        width: 150,        
    },
    txt: {
        color: '#D0BBFE',
        fontWeight: '900',
        textAlign: 'center',
        fontSize: 18,
    },
    txt2: {
        color: '#D0BBFE',
        marginTop: 20,
        marginBottom: 20,
        fontSize: 18,
    },
});

export default styles