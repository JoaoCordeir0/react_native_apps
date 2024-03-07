import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react'
import { styles } from './Styles'; 

export default function App() {

  const [currentValue, setCurrentValue] = useState("")  

  const keys = ['AC', '( )', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']

  function isText(c) {
    return c == 'AC' || c == '( )' || c == '%';
  }

  function isSignal(c) {
    return c == '+' || c == '-' || c == '/' || c == 'X' || c == 'x' || c == '=' || c == '%'
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
    let stringValue = currentValue.replace('x', '*')
    let result = ''
    
    if (stringValue.indexOf('%') != -1) {
      let stringSplit = stringValue.split(' ')
      let firstNumber = stringSplit[0]
      let secondNumber = stringSplit[2]
      result = (parseFloat(firstNumber) / 100) * parseFloat(secondNumber)
    } else {
      result = eval(stringValue)  
    }

    if ((result.toString()).indexOf('.') != -1) {
      result = result.toFixed(2)
    }

    setCurrentValue(result.toString())
  }

  function handleInput(btnPress) {       
    if (btnPress == 'AC') {      
      setCurrentValue("")      
    } else if (btnPress == '=') {
      calculator()     
    } else if(btnPress == '( )') {
      setCurrentValue(`(${currentValue})`) 
    } else {            
      if (isSignal(btnPress)) {
        setCurrentValue(currentValue + ' ' + (btnPress == 'X' ? 'x' : btnPress) + ' ')               
      } else {
        setCurrentValue(currentValue + '' + btnPress)             
      }      
    }    
  }

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />

      <View style={styles.result}>
        <Text style={styles.resulttext}>{currentValue}</Text>
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