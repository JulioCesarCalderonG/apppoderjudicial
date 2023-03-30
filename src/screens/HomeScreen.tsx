import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  useWindowDimensions
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {WebView} from 'react-native-webview';


interface Props extends StackScreenProps<any, any> { }
export const Home = ({ navigation }: Props) => {
  const {height, width} = useWindowDimensions();
  return (
    <SafeAreaView style={{width:width, height:height,...style.container}}>
      <Image
        source={require('../assets/img/shipibo-2.png')}
        style={{width:'100%',height:height+200, marginTop:-120, position:'absolute',opacity:0.3}}
        resizeMode="cover"
        
      />
    {/* <ImageBackground
      source={require('../assets/img/shipibo-2.png')}
      resizeMode="cover"
      style={{...style.container, width:'100%',height:height, backgroundColor:'black'}}
      imageStyle={{ opacity: 0.3 }}>
    
      
    
    </ImageBackground> */}
    <View style={{ ...style.contentImage, top: 180 }}>
        <Image
          source={require('../assets/img/portadanew2.png')}
          style={style.imagePrincipal}
          resizeMode="stretch"
        />
      </View>
      <View
        style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          position:'absolute',
          zIndex:99
        }}
      >
        <Image
          source={require('../assets/img/pj2.png')}
          style={style.imageSecundaria}
        />
        <Text style={style.titulo}>PODER JUDICIAL</Text>
        <Text style={style.subTitulo}>Corte Superior de Justicia de Ucayali</Text>
        <View style={style.opciones}>
          {/*  Modifica el primer botonm */}
          <TouchableOpacity
            style={style.btnJudiciales}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('DrawerJudicial')}>
            <Text style={style.btnText}>Servicios Judiciales</Text>
          </TouchableOpacity>
          {/* Modifica el segundo boton */}
          <TouchableOpacity
            style={style.btnTransparencia}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('DrawerTransparencia')}>
            <Text style={style.btnText}>Transparencia</Text>
          </TouchableOpacity>
        </View>
      </View>
    <View style={{marginTop:height-240}}>
      <WebView
          originWhitelist={['*']}
          source={{html:'<h2 style="font-size:42px;text-align:justify">'+` La Corte Superior de Justicia de Ucayali genera cercania de nuestros servicios
          a la población, siendo esto un compromiso de la gestión 2023-2024 para promover
          canales de acceso hacia los ciudadanos que contribuyan a la mejora en la
          administración de la justicia.`+'</h2>'
          +'<h2 style="text-align:center; font-size:40px;margin-bottom:-32px">Tullio Bermeo Turchi</h2>' 
          +'<h2 style="text-align:center; font-size:40px;margin-bottom:-32px">Presidente</h2>' 
          +'<h2 style="text-align:center; font-size:40px;margin-bottom:-32px">Gestión 2023-2024</h2>'}}
          style={{
            backgroundColor:'rgba(0,0,0,0)',
            marginBottom:-50
          }}
        />
      <Text style={{color:'rgba(0,0,0,0.0)'}}>aasasasasasasaaaaaaaaaaaaaaaaaaaaaaa</Text>
    </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barra: {
    width: '100%',
    height: 55,
    backgroundColor: '#960b28',
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  textBarra: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  opciones: {
    flexDirection: 'row',
    marginBottom: 0,
  },
  contentImage: {
    width: '100%',
    position: 'absolute',
    zIndex: 99999,
  },
  imagePrincipal: {
    width: '100%',
    height: 200,
    marginBottom: 30,
    marginTop: -180,
  },
  imageSecundaria: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  titulo: {
    color: 'black',
    fontWeight: '900',
    fontSize: 17,
    marginBottom: 3,
  },
  subTitulo: {
    color: 'black',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 20,
  },
  btnJudiciales: {
    marginRight: 10,
    width: 150,
    height: 40,
    backgroundColor: '#960b28',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  btnTransparencia: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#960b28',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    marginLeft: 10,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  mensaje: {
    position: 'absolute',
    bottom: 120,
    borderRadius: 5,
    fontSize: 9,
    padding: 30,
    alignItems: 'center',
  },
  textMensaje: {
    color: 'black',
    marginBottom: 8,
    fontSize: 14,
    textAlign: 'justify'
  },
  textPresidente: {
    color: 'black',
    fontWeight: 'bold',
  },
  textCargo: {
    color: 'black',
    fontWeight: 'bold',
  },
  textGestion: {
    color: 'black',
    fontWeight: 'bold',
  },
});
