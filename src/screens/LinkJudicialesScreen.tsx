import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react'
import { View, Text } from 'react-native';

interface Props extends DrawerScreenProps<any, any> {};

const LinkJudicialesScreen = ({navigation,route}:Props) => {
  return (
    <View style={{marginTop:100}}>
        <Text style={{color:'black'}}>hola</Text>
    </View>
  )
}

export default LinkJudicialesScreen