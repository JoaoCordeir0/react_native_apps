import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react'
import { styles } from './Styles'; 

export default function App() {

  const [currentNumber, setCurrentNumber] = useState("")  

  const keys = ['AC', '( )', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', ',', '=']

  function isText(c) {
    return c == 'AC' || c == '( )' || c == '%';
  }

  function isSignal(c) {
    return c == '+' || c == '-' || c == '/' || c == 'X' || c == 'x' || c == '='
  }
  
  function isZero(c) {
    return c == '0'
  }

  function returnKeyboardCSS(c) {
    if (isSignal(c)) 
      return styles.keyboarsignal 
    else if (isText(c))
      return styles.keyboardtext
    else if (isZero(c))
      return styles.keyboardzero
    else 
      return styles.keyboardnumber
  }

  function calculator() {
    let stringSplit = currentNumber.split(' ')
    let firstNumber = stringSplit[0]
    let signal = stringSplit[1]
    let secondNumber = stringSplit[2]
    let result = ''

    switch(signal){
      case '+':        
        result = parseFloat(firstNumber) + parseFloat(secondNumber)
        break;
      case '-':        
        result = parseFloat(firstNumber) - parseFloat(secondNumber)
        break;
      case '/':        
        result = (parseFloat(firstNumber) / parseFloat(secondNumber)).toFixed(2)
        break;
      case 'x':        
        result = parseFloat(firstNumber) * parseFloat(secondNumber)
        break;
    }
    setCurrentNumber(result)    
  }

  function handleInput(btnPress) {       
    if (btnPress == 'AC') {      
      setCurrentNumber("")      
    } else if (btnPress == '=') {
      calculator()      
    } else {            
      if (isSignal(btnPress)) {
        setCurrentNumber(currentNumber + ' ' + (btnPress == 'X' ? 'x' : btnPress) + ' ')               
      } else {
        setCurrentNumber(currentNumber + '' + btnPress)             
      }      
    }    
  }

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />

      <View style={styles.result}>
        <Text style={styles.resulttext}>{currentNumber}</Text>
      </View>      
      <View style={styles.keyboard}>
        {keys.map((key) =>          
          <TouchableOpacity style={returnKeyboardCSS(key)} key={key} onPress={() => handleInput(key)}>
            <Text style={isText(key) ? styles.keyboarditemtext : styles.keyboarditemnumber}>{key}</Text>
          </TouchableOpacity>
        )}        
      </View>      
    </View>
  );
}