import React,{useEffect} from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { drawerStyle } from '../style/DrawerMenuStyle';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any,any> {};

const TransparenciaScreen = ({navigation}:Props) => {
  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <View
          style={drawerStyle.container}>
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{
              marginLeft: 10,
            }}>
            <Icon
              name='menu'
              style={{
                fontSize:30,
                color:'white'
              }}
             />
          </TouchableOpacity>
          <Text style={{fontWeight:'bold', fontSize:16, color:'white'}}> CSJ Ucayali</Text>
        </View>
      ),
      drawerPosition: 'left',
    });
  }, []);
  return (
    <View>
        <Text>Hola mundo</Text>
    </View>
  )
}

export default TransparenciaScreen