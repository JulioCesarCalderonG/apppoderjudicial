import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/HomeScreen';
import DrawerJudicial from './DrawerJudicial';
import DrawerTransparencia from './DrawerTransparencia';



const Stack = createStackNavigator();

const StackGeneral = ()=> {
  return (
    <Stack.Navigator
        
        screenOptions={{
           headerShown:false
        }}
        initialRouteName="Home"
    >
      <Stack.Screen name="Home" options={{
        headerShown:true,
        headerStyle:{
          backgroundColor:'#960b28',
          height:50,
          
        },
        headerTitle:'CSJ Ucayali',
        headerTitleStyle:{
          color:'white',
          fontSize:20,
          fontWeight:'900'
        }
        
      }} component={Home}  />
      <Stack.Screen name="DrawerJudicial" component={DrawerJudicial}  />
      <Stack.Screen name="DrawerTransparencia" component={DrawerTransparencia}  />

    </Stack.Navigator>
  );
}

export default StackGeneral;