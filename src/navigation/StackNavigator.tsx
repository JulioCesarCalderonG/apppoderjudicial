import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/HomeScreen';
import DrawerJudiciales from './DrawerJudiciales';
import DrawerTransparencia from './DrawerTransparencia';

const Stack = createStackNavigator();

const StackNavigator = ()=> {
  return (
    <Stack.Navigator
        
        screenOptions={{
           headerShown:false
            
        }}
    >
      <Stack.Screen name="Home" component={Home}  />
      <Stack.Screen name="ModuloJudicial" component={DrawerJudiciales}  />
      <Stack.Screen name="ModuloTransparencia" component={DrawerTransparencia}  />
    </Stack.Navigator>
  );
}

export default StackNavigator;