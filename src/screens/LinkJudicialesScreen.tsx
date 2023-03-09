import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react'
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {};

const LinkJudicialesScreen = ({navigation,route}:Props) => {
  return (
    <View style={{marginTop:100}}>
        <Text style={{color:'black'}}>hola</Text>
    </View>
  )
}

export default LinkJudicialesScreen