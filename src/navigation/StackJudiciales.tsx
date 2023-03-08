import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import JudicialesScreen from '../screens/JudicialesScreen';

const Stack = createStackNavigator();

const StackJudiciales = ()=> {
  return (
    <Stack.Navigator
        
        screenOptions={{
           headerShown:false
            
        }}
        initialRouteName="Judiciales"
    >
      <Stack.Screen name="Judiciales" component={JudicialesScreen}  />
    </Stack.Navigator>
  );
}

export default StackJudiciales;