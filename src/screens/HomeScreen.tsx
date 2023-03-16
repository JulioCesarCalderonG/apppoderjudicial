import React, {useEffect} from 'react';
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
      <View style={style.contentImage}>
        <Image
          source={require('../assets/img/portada2.png')}
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
        <Text style={style.mensajeText}>
          Mensaje presidente: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Adipisci autem magni possimus labore perferendis sunt explicabo consequatur
          laborum ullam harum molestiae minima magnam eaque provident, aliquam fugiat.

          Tullio Bermeo Turchi
          Gestión 2023-2024.
        </Text>
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
  },
  contentImage: {
    width: '100%',
  },
  imagePrincipal: {
    width: '100%',
    height: 200,
    marginBottom: 30,
    marginTop: -220
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
    fontSize: 13,
  },
  mensaje:{
    position:'absolute',
    bottom:150,
    margin:50,
    borderRadius:5,
  },
  mensajeText:{
    color:'black',
    textAlign:'justify',
  }
});
