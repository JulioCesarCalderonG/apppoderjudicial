import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any> {}
export const Home = ({navigation}: Props) => {
  return (
    <ImageBackground
      source={require('../assets/img/shipibo-2.png')}
      resizeMode="cover"
      style={style.container}
      imageStyle={{opacity: 0.3}}>
      <View style={{...style.contentImage, top:340}}>
        <Image
          source={require('../assets/img/portadanew2.png')}
          style={style.imagePrincipal}
          resizeMode="stretch"
        />
      </View>
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
      <View style={style.mensaje}>
        <Text style={style.textMensaje}>
          La Corte Superior de Justicia de Ucayali genera cercania de nuestros servicios
          a la población, siendo esto un compromiso de la gestión 2023-2024 para promover
          canales de acceso hacia los ciudadanos que contribuyan a la mejora en la
          administracion de la justicia.
        </Text>

        <Text style={style.textPresidente}>Tullio Bermeo Turchi</Text>
        <Text style={style.textCargo}>Presidente</Text>
        <Text style={style.textGestion}>Gestión 2023-2024</Text>
      </View>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: -120,
    marginTop: -160,
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
    marginBottom:0
  },
  contentImage: {
    width: '100%',
    position:'absolute',
    zIndex:99999,
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
    textAlign:'center'
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
