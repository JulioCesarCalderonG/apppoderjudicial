import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {drawerStyle} from '../style/DrawerMenuStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import LogoComponent from '../components/LogoComponent';
import {RootDrawerTransparenciaParams} from '../navigation/DrawerTransparencia';
import GrupoTransparencia from '../components/GrupoTransparencia';

interface Props
  extends DrawerScreenProps<RootDrawerTransparenciaParams, 'Transparencia'> {}

const TransparenciaScreen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <View style={drawerStyle.container}>
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{
              marginLeft: 10,
            }}>
            <Icon
              name="menu"
              style={{
                fontSize: 30,
                color: 'white',
              }}
            />
          </TouchableOpacity>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>
            {' '}
            CSJ Ucayali
          </Text>
        </View>
      ),
      drawerPosition: 'left',
    });
  }, []);
  return (
    <ImageBackground
      source={require('../assets/img/shipibo-2.png')}
      resizeMode="cover"
      style={style.container}
      imageStyle={{
        opacity: 0.4,
      }}>
      <LogoComponent />
      <Text style={style.titulo}>TRANSPARENCIA</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={style.containerBtn}>
        <View style={style.general}>
          <GrupoTransparencia
            titulo="GEOCALIZACIÓN"
            img={require('../assets/img/icono-judiciales/1-geocalizacion.jpg')}
            onPress={() => {
              navigation.navigate('Geolocalizacion');
            }}
          />
          <GrupoTransparencia
            titulo="CONSULTA AMIGABLE"
            img={require('../assets/img/icono-judiciales/4-consulta-amigable.jpg')}
            onPress={() => {
              navigation.navigate('LinkTransparencia', {
                link: 'https://apps5.mineco.gob.pe/transparencia/Navegador/default.aspx',
              });
            }}
          />
          <GrupoTransparencia
            titulo="DIRECTORIO TELEFÓNICO"
            img={require('../assets/img/icono-judiciales/telefonia.jpg')}
            onPress={() => {
              navigation.navigate('DirectorioGeneral');
            }}
          />
          <GrupoTransparencia
            titulo="RESOLUCIONES ADMINISTRATIVAS"
            img={require('../assets/img/icono-judiciales/5-resoluciones-administrativas.jpg')}
            onPress={() => {
              navigation.navigate('LinkTransparencia', {
                link: 'https://www.gob.pe/institucion/csjucayali/normas-legales',
              });
            }}
          />
          <GrupoTransparencia
            titulo="FACEBOOK NOTICIAS"
            img={require('../assets/img/icono-judiciales/6.1-facebook.jpg')}
            onPress={() => {
              navigation.navigate('LinkTransparencia', {
                link: 'https://www.facebook.com/CSJUC',
              });
            }}
          />
          <GrupoTransparencia
            titulo="DECISIONES JUDICIALES"
            img={require('../assets/img/icono-judiciales/7-decisiones-judiciales.jpg')}
            onPress={() => {
              navigation.navigate('LinkTransparencia', {
                link: 'https://gestionsij.pj.gob.pe/sentidoFallo-web/#/busqueda',
              });
            }}
          />
          <GrupoTransparencia
            titulo="PROGRAMACIÓN DE AUDIENCIAS"
            img={require('../assets/img/icono-judiciales/8-programacionaudiencias.jpg')}
            onPress={() => {
              navigation.navigate('LinkTransparencia', {
                link: 'https://apps.pj.gob.pe/guiaprogramacion/',
              });
            }}
          />
          <GrupoTransparencia
            titulo="CONOCE A TU JUEZ"
            img={require('../assets/img/icono-judiciales/9-conoce-juez.jpg')}
            onPress={() => {
              navigation.navigate('LinkTransparencia', {
                link: 'https://serjus.pj.gob.pe/conocejuez',
              });
            }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default TransparenciaScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: -100,
    marginBottom: -100,
  },
  titulo: {
    textAlign: 'center',
    fontWeight: '700',
    color: 'black',
    fontSize: 18,
    /*marginTop: 20,*/
    marginBottom: 17,
    textDecorationLine: 'underline',
  },
  containerBtn: {
    width: '100%',
    height: '100%',
    marginBottom: 100,
  },
  general: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* principal: {
    marginBottom: 10,
    width: '48%',
    marginLeft: 5,
  },
  btnCategoria: {
    backgroundColor: '#960b28',
    flexDirection: 'row',
    alignItems: 'center',
    height: 75,
    borderRadius: 5,
    borderColor: '#ccc',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  imgIcon: {
    width: 35,
    height: 35,
    marginLeft: 3,
    marginRight:3
  },
  textBtn: {
    color: 'white',
    fontSize: 9,
    fontWeight: 'bold',
    marginRight: 40,
  }, */
});
