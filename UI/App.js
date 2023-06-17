import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Register  from './pages/RegisterUser';
import Home from './pages/Home';
import Login from './pages/LoginUser';
import jpt from './pages/jpt';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
        <NavigationContainer>
      <Stack.Navigator  initialRouteName="Test">
         <Stack.Screen name="Login"  component={Login} />
          <Stack.Screen name="Register" component={Register} />
         
             <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Register/>
    // </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
