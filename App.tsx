

import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import { NavigationContainer } from '@react-navigation/native';
import DrawerScreen from './Screens/Drawer/DrawerScreen';






function App(): React.JSX.Element {
 
  return (
    <SafeAreaProvider>

  <NavigationContainer>
  

    <DrawerScreen/>
   
  </NavigationContainer>
    </SafeAreaProvider>
  )}
export default App;
