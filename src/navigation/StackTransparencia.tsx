import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/HomeScreen';
import TransparenciaScreen from '../screens/TransparenciaScreen';

const Stack = createStackNavigator();

const StackTransparencia = ()=> {
  return (
    <Stack.Navigator
        
        screenOptions={{
           headerShown:true
            
        }}
        initialRouteName="Transparencia"
    >
      <Stack.Screen name="Transparencia" component={TransparenciaScreen}  />
    </Stack.Navigator>
  );
}

export default StackTransparencia;