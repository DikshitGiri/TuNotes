
// import { Text, View } from 'react-native';
// const Home = () => {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>This is test of navigation</Text>
//         </View >
//     );
    
// }
// export default Home;

import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Test from './Test';





const Drawer = createDrawerNavigator();

export default function App() {
  return (
   
      <Drawer.Navigator >
        <Drawer.Screen name="Test" component={Test} />
        
      </Drawer.Navigator>
 
  );
}