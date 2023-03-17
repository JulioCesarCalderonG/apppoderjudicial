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
          <Text style={{fontWeight:'bold', fontSize:18, color:'white'}}> CSJ Ucayali</Text>
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
        opacity: 0.4
      }}
      >

      <LogoComponent />
      <Text style={style.titulo}>TRANSPARENCIA</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={style.containerBtn}>

<View style={style.general}>
          <TouchableOpacity
            style={style.viewServicios}
            activeOpacity={0.7}
            onPress={()=>{navigation.navigate('Geolocalizacion')}}
          >
            <Image
              source={require('../assets/img/icono-judiciales/1-geocalizacion.jpg')}
              style={{...style.imgServicios}}
            />
            <Text style={style.titleServicios}>GEOCALIZACIÓN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.viewServicios}
            activeOpacity={0.7}
            onPress={()=>{navigation.navigate('LinkTransparencia',{link:'https://apps5.mineco.gob.pe/transparencia/Navegador/default.aspx'})}}
          >
            <Image
              source={require('../assets/img/icono-judiciales/4-consulta-amigable.jpg')}
              style={style.imgServicios}
            />
            <Text style={style.titleServicios}>CONSULTA AMIGABLE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.viewServicios}
            activeOpacity={0.7}
            onPress={()=>{navigation.navigate('DirectorioGeneral')}}
          >
            <Image
              source={require('../assets/img/icono-judiciales/telefonia.jpg')}
              style={{...style.imgServicios}}
            />
            <Text style={style.titleServicios}>DIRECTORIO</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.viewServicios}
            activeOpacity={0.7}
            onPress={()=>{navigation.navigate('LinkTransparencia',{link:'https://www.gob.pe/institucion/csjucayali/normas-legales'})}}
          >
            <Image
              source={require('../assets/img/icono-judiciales/5-resoluciones-administrativas.jpg')}
              style={style.imgServicios}
            />
            <Text style={style.titleServicios}>RESOLUCIONES ADMINISTRATIVAS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.viewServicios}
            activeOpacity={0.7}
            onPress={()=>{navigation.navigate('LinkTransparencia',{link:'https://www.facebook.com/CSJUC'})}}
          >
            <Image
              source={require('../assets/img/icono-judiciales/6.1-facebook.jpg')}
              style={style.imgServicios}
            />
            <Text style={style.titleServicios}>FACEBOOK NOTICIAS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.viewServicios}
            activeOpacity={0.7}
            onPress={()=>{navigation.navigate('LinkTransparencia',{link:'https://gestionsij.pj.gob.pe/sentidoFallo-web/#/busqueda'})}}
          >
            <Image
              source={require('../assets/img/icono-judiciales/7-decisiones-judiciales.jpg')}
              style={style.imgServicios}
            />
            <Text style={style.titleServicios}>DECISIONES JUDICIALES</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.viewServicios}
            activeOpacity={0.7}
            onPress={()=>{navigation.navigate('LinkTransparencia',{link:'https://apps.pj.gob.pe/guiaprogramacion/'})}}
          >
            <Image
              source={require('../assets/img/icono-judiciales/8-programacionaudiencias.jpg')}
              style={style.imgServicios}
            />
            <Text style={style.titleServicios}>PROGRAMACIÓN DE AUDIENCIAS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.viewServicios}
            activeOpacity={0.7}
            onPress={()=>{navigation.navigate('LinkTransparencia',{link:'https://serjus.pj.gob.pe/conocejuez'})}}
          >
            <Image
              source={require('../assets/img/icono-judiciales/9-conoce-juez.jpg')}
              style={style.imgServicios}
            />
            <Text style={style.titleServicios}>CONOCE A TU JUEZ</Text>
          </TouchableOpacity>
        </View>

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
    fontSize: 18,
    /*marginTop: 20,*/
    marginBottom: 17,
    textDecorationLine: 'underline',
  },
  containerBtn: {
    width: '100%',
    height: '100%',
    marginBottom: 100
  },
  general: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewServicios: {
    width: '85%',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 3,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 5,
  },
  imgServicios: {
    width: '80%',
    height: 130,
    margin:5,
    borderRadius: 10
  },
  titleServicios: {
    color: "#960B28",
    fontWeight: '700',
    fontSize: 14,
    marginTop:3
  },
  buttonServicios: {
    backgroundColor: 'red'
  },
  textButton: {
    color: "#960B28",
    fontWeight: '700',
  }
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
