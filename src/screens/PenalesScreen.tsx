import React,{useEffect, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { drawerStyle } from '../style/DrawerMenuStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerScreenProps } from '@react-navigation/drawer';
import NetInfo from "@react-native-community/netinfo";
import { RootDrawerParams } from '../navigation/DrawerJudicial';
interface Props extends DrawerScreenProps<RootDrawerParams, 'Penales'> {};

const PenalesScreen = ({navigation,route}:Props)  => {
    const [datos, setDatos] = useState<boolean>(false);

    useEffect(() => {
      const unsubscribe = NetInfo.addEventListener(state => {
        if (!state) return setDatos(false);  
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
        setDatos(state.isConnected!)
      });
    }, [datos])
    
    
  
  
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
        source={{ uri: route.params.link }}
        originWhitelist={['http://*', 'https://*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        /* onFileDownload={(resp)=>{
            console.log(resp);
            
        }}
        onShouldStartLoadWithRequest={(request) => {
            //console.log(request.url);
            if (request.url === 'https://cape.pj.gob.pe/cape/pages/tramite-status.xhtml') {
                //console.log('hola');
                //Linking.openURL(request.url)
                return true;
            }else{
                return true
            }
            
          }} */
        />
    }
</View>
  )
}

export default PenalesScreen;

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