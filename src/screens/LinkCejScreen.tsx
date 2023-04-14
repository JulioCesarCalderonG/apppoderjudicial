import React,{useEffect, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { drawerStyle } from '../style/DrawerMenuStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerScreenProps } from '@react-navigation/drawer';
import NetInfo from "@react-native-community/netinfo";
import { RootDrawerParams } from '../navigation/DrawerJudicial';
import RNFetchBlob from 'rn-fetch-blob';
interface Props extends DrawerScreenProps<RootDrawerParams, 'LinkCej'> {};

const LinkCejScreen = ({navigation,route}:Props) => {
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

  const dowloadPdf=(url:any)=>{
       // Get today's date to add the time suffix in filename
       const date = new Date();

  const { DownloadDir } = RNFetchBlob.fs.dirs; // You can check the available directories in the wiki.
  const options = {
    fileCache: true,
    addAndroidDownloads: {
      useDownloadManager: true, // true will use native manager and be shown on notification bar.
      notification: true,
      path: `${DownloadDir}/me_${Math.floor(date.getTime() + date.getSeconds() / 2)}.pdf`,
      description: 'Downloading.',
    },
  };

  RNFetchBlob.config(options).fetch('GET', 'https://cej.pj.gob.pe/cej/forms/documentoD.html?nid=hMtGWKvKoqfCmTMnpmJ').then((res) => {
    console.log('do some magic in here');
  });
  }
  const getFileExtention = (fileUrl:any) => {
    // To get the file extension
    return /[.]/.exec(fileUrl) ?
             /[^.]+$/.exec(fileUrl) : undefined;
  };
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
              onShouldStartLoadWithRequest={(request) => {
                console.log(request.url);
                const resp = request.url.includes('documentoD.html');
                if (resp) {
                  //dowloadPdf(request.url);
                  Linking.openURL(request.url);
                  return true;
                }
                return true;
              }}
              /* onFileDownload={({ nativeEvent: { downloadUrl } }) => {
                // You use downloadUrl which is a string to download files however you want.
                console.log(downloadUrl);
                
              }} */

              />
          }
    </View>
  )
}

export default LinkCejScreen;


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