import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import JudicialesScreen from '../screens/JudicialesScreen';
import LinkJudicialesScreen from '../screens/LinkJudicialesScreen';


export type RootStackParams = {
  Judiciales: undefined,
  LinkJudiciales:{
    link:string
  }
}

const Stack = createStackNavigator<RootStackParams>();

const StackJudiciales = ()=> {
  return (
    <Stack.Navigator
        
        screenOptions={{
           headerShown:true
        }}
        initialRouteName="Judiciales"
    >
      <Stack.Screen name="Judiciales" component={JudicialesScreen}  />
      <Stack.Screen name="LinkJudiciales" options={{
        headerShown:true
      }} component={LinkJudicialesScreen}  />
    </Stack.Navigator>
  );
}

export default StackJudiciales;