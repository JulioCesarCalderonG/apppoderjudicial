import { DrawerScreenProps } from '@react-navigation/drawer';
import React,{useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RootDrawerParams } from '../navigation/DrawerJudicial';
import NetInfo from '@react-native-community/netinfo';
import { drawerStyle } from '../style/DrawerMenuStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import WebView from 'react-native-webview';

interface Props extends DrawerScreenProps<any, any> {};

const Prueba = ({navigation}:Props) => {
    
  const [datos, setDatos] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state) return setDatos(false);  
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setDatos(state.isConnected!)
    });
  }, [datos]);
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
      
    {
      (!datos)
      ?
        <View style={style.contenedorConexion}>
          <Text style={style.textNetworkTitle}>Sin Conexion a Internet</Text>
          <Text style={style.textNetworkSubtitle}>Conéctese a una señal Wifi o habilite sus datos moviles</Text>
        </View>
      :
      <WebView
      originWhitelist={['*']}
      source={{uri:''}}
        />
    }
</View>
  )
}

export default Prueba;
const style = StyleSheet.create({
    contenedor:{
      flex:1,
      marginTop:50
    },
    contenedorConexion:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      padding:40
    },
    textNetworkTitle:{
      color:'black',
      fontSize:18,
      fontWeight:'bold',
      marginBottom:10
    },
    textNetworkSubtitle:{
      color:'black',
      fontSize:15,
      textAlign:'center'
    }
  })