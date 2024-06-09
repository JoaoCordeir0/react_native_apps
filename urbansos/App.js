import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './screens/Login'
import ListReports from './screens/ListReports'
import AddReport from './screens/AddReport'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>     
      <StatusBar style="light" /> 
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Reports' component={ListReports} />
        <Stack.Screen name='Add report' component={AddReport} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
