import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Home';
import Profile from '../Profile';
import Details from '../Details';
import Counter from '../Counter';
import Login from '../Login';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';
// import { NavigationContainer } from '@react-navigation/native';

type ElementType = {
  Home: undefined;
  Profile: undefined;
  Details: undefined;
  Counter: undefined;
Login:undefined;
};

const Drawer = createDrawerNavigator<ElementType>();

const DrawerScreen: React.FC = () => {

  return (
    <Drawer.Navigator initialRouteName='Home'>
     <Drawer.Screen name="Home" component={Home} /><Drawer.Screen name="Counter" component={Counter} />
     
     
      <Drawer.Screen name="Login" component={Login} />
     <Drawer.Screen name="Profile" component={Profile} />
       <Drawer.Screen name="Details" component={Details} />

      
     
     
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
