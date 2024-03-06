import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',    
    },
    result: {        
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      height: 320,
      backgroundColor: 'black',      
    },
    resulttext: {
      color: 'white',    
      padding: 20,
      fontSize: 50  
    },
    keyboard: {
      flexDirection: 'row',
      flexWrap: 'wrap',    
      justifyContent: 'space-around',
      marginTop: 20,
      justifyContent: 'center',        
    },
    keyboardnumber: {
      backgroundColor: '#333333',
      borderRadius: 50,    
      margin: 10,          
      width: 80,
      height: 80,
    },
    keyboarsignal: {
      backgroundColor: '#FF9F0A',
      borderRadius: 50,    
      margin: 10,  
      width: 80,
      height: 80,  
    },
    keyboardtext: {
      backgroundColor: '#A5A5A5',
      borderRadius: 50,    
      margin: 10,     
      width: 80,
      height: 80,           
    },
    keyboardzero: {
      backgroundColor: '#333333',
      borderRadius: 50,    
      margin: 10,     
      width: 180, // 80 + 80 + 20 de margem
      height: 80,           
    },
    keyboarditemnumber: {
      color: 'white',
      padding: 25,
      fontSize: 25,
      textAlign: 'center'                
    },
    keyboarditemtext: {
      color: 'white',
      fontSize: 23,    
      padding: 20,     
      textAlign: 'center'       
    }
});

export { styles };