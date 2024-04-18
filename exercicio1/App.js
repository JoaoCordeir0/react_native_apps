import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator()

import HomeScreen from './screens/HomeScreen'
import RegisterProductScreen from './screens/RegisterProductScreen'
import RegisterClientScreen from './screens/RegisterClientScreen'
import AboutScreen from './screens/AboutScreen';
import RegisterUserScreen from './screens/RegisterUserScreen'
import RegisterSupplierScreen from './screens/RegisterSupplierScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Cadastro de Cliente' component={RegisterClientScreen} />
        <Drawer.Screen name='Cadastro de Produto' component={RegisterProductScreen} />    
        <Drawer.Screen name='Cadastro de Usuário' component={RegisterUserScreen} />    
        <Drawer.Screen name='Cadastro de Fornecedor' component={RegisterSupplierScreen} />     
        <Drawer.Screen name='Sobre o Sistema' component={AboutScreen} />        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
