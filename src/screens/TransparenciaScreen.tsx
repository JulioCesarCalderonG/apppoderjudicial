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
import {Row, Col} from 'react-native-flex-grid';
import {drawerStyle} from '../style/DrawerMenuStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import LogoComponent from '../components/LogoComponent';
import { RootDrawerTransparenciaParams } from '../navigation/DrawerTransparencia';


interface Props extends DrawerScreenProps<RootDrawerTransparenciaParams,'Transparencia'> {};

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
    <ImageBackground
      source={require('../assets/img/shipibo-2.png')}
      resizeMode="cover"
      style={style.container}>
      <LogoComponent />
      <Text style={style.titulo}>TRANSPARENCIA</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={style.containerBtn}>
        <Row style={{}}>
          <Col xs="6" sm="6" style={{...style.principal}}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={() => {
                navigation.navigate('Geolocalizacion');
              }}>
              <Image
                source={require('../assets/img/icono-transparencia/iconos/geocalizacion.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>
                GEOLOCALIZACION
              </Text>
            </TouchableOpacity>
          </Col>
          <Col xs="6" sm="6" style={style.principal}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={() => {
                navigation.navigate('LinkTransparencia', {
                  link: 'https://cej.pj.gob.pe/cej/forms/busquedaform.html',
                });
              }}>
              <Image
                source={require('../assets/img/icono-transparencia/iconos/estadistica.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>
                ESTADISTICA
              </Text>
            </TouchableOpacity>
          </Col>
          <Col xs="6" sm="6" style={style.principal}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={() => {
                navigation.navigate('LinkTransparencia', {
                  link: 'https://apps5.mineco.gob.pe/transparencia/Navegador/default.aspx',
                });
              }}>
              <Image
                source={require('../assets/img/icono-transparencia/iconos/consulta.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>
                CONSULTA AMIGABLE
              </Text>
            </TouchableOpacity>
          </Col>
          <Col xs="6" sm="6" style={style.principal}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={() => {
                navigation.navigate('DirectorioGeneral');
              }}>
              <Image
                source={require('../assets/img/icono-transparencia/iconos/directorio.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>
                DIRECTORIO
              </Text>
            </TouchableOpacity>
          </Col>
          <Col xs="6" sm="6" style={style.principal}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={() => {
                navigation.navigate('LinkTransparencia', {
                  link: 'https://www.gob.pe/institucion/csjucayali/normas-legales',
                });
              }}>
              <Image
                source={require('../assets/img/icono-transparencia/iconos/resoluciones.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>
                RESOLUCIONES
              </Text>
            </TouchableOpacity>
          </Col>
          <Col xs="6" sm="6" style={style.principal}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={() => {
                navigation.navigate('LinkTransparencia', {
                  link: 'https://www.facebook.com/CSJUC',
                });
              }}>
              <Image
                source={require('../assets/img/icono-transparencia/iconos/facebook.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>
                FACEBOOK NOTICIAS
              </Text>
            </TouchableOpacity>
          </Col>
          <Col xs="6" sm="6" style={style.principal}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={() => {
                navigation.navigate('LinkTransparencia', {
                  link: 'https://gestionsij.pj.gob.pe/sentidoFallo-web/#/busqueda',
                });
              }}>
              <Image
                source={require('../assets/img/icono-transparencia/iconos/decisiones.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>
                DESICIONES JUDICIALES
              </Text>
            </TouchableOpacity>
          </Col>
          <Col xs="6" sm="6" style={style.principal}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={() => {
                navigation.navigate('LinkTransparencia', {
                  link: 'https://apps.pj.gob.pe/guiaprogramacion/',
                });
              }}>
              <Image
                source={require('../assets/img/icono-transparencia/iconos/programacion.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>
                PROGRAMACION DE AUDIENCIAS
              </Text>
            </TouchableOpacity>
          </Col>
        </Row>
      </ScrollView>
    </ImageBackground>
  )
}

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
    fontSize: 14,
    marginTop: 20,
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  containerBtn: {
    padding: 10,
  },
  principal: {
    marginBottom: 10,
    width: '48%',
    marginLeft: 5,
  },
  btnCategoria: {
    backgroundColor: '#960b28',
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
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
    marginLeft:3,
    marginRight:5
  },
  textBtn: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    marginRight: 35,
  },
});
