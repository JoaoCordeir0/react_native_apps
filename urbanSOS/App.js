import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './screens/Login'
import Reports from './screens/Reports'

const Stack = createStackNavigator()

const MyTheme = DarkTheme

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Reports' component={Reports} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
