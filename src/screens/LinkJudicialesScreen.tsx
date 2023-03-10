import React,{useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { RootStackParams } from '../navigation/StackJudiciales';
import { drawerStyle } from '../style/DrawerMenuStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<RootStackParams, 'LinkJudiciales'> {};

const LinkJudicialesScreen = ({navigation,route}:Props) => {

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
                fontSize: 30,
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
    <View style={style.contenedor}>
       <WebView 
       source={{ uri: route.params.link }} 
       onLoad={()=>console.log('Loaded')}
       />
    </View>
  )
}

export default LinkJudicialesScreen;

const style = StyleSheet.create({
  contenedor:{
    flex:1,
    marginTop:50
  }
})