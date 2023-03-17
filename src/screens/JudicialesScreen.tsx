import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Row, Col } from 'react-native-flex-grid';
import { drawerStyle } from '../style/DrawerMenuStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import LogoComponent from '../components/LogoComponent';

interface Props extends DrawerScreenProps<any, any> { }

const JudicialesScreen = ({ navigation }: Props) => {
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
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}>
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
        opacity: 0.4
      }}
    >
      <LogoComponent/>
      <Text style={style.titulo}>SERVICIOS JUDICIALES</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={style.containerBtn}
      >
        <View style={style.general}>
          <TouchableOpacity
            style={style.viewServicios}
            activeOpacity={0.7}
            onPress={()=>{navigation.navigate('CEJ')}}
          >
            <Image
              source={require('../assets/img/icono-judiciales/1.1-onsultadeexpediente.jpg')}
              style={{...style.imgServicios}}
            />
            <Text style={style.titleServicios}>CONSULTA DE EXPEDIENTES JUDICIALES</Text>
            <Text style={style.textButton}>(No Penales)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.viewServicios}
            activeOpacity={0.7}
            onPress={()=>{navigation.navigate('MAU')}}
          >
            <Image
              source={require('../assets/img/icono-judiciales/modulo-atencion.png')}
              style={style.imgServicios}
            />
            <Text style={style.titleServicios}>MÓDULO DE ATENCIÓN AL USUARIO - MAU</Text>
            <Text style={style.textButton}>(Todas las materias)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.viewServicios}
            activeOpacity={0.7}
            onPress={()=>{navigation.navigate('MP')}}
          >
            <Image
              source={require('../assets/img/icono-judiciales/3-1-mesadepartes.png')}
              style={style.imgServicios}
            />
            <Text style={style.titleServicios}>MESA DE PARTES VIRTUAL</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.viewServicios}
            activeOpacity={0.7}
            onPress={()=>{navigation.navigate('ECCD')}}
          >
            <Image
              source={require('../assets/img/icono-judiciales/4-emision-certificados.png')}
              style={style.imgServicios}
            />
            <Text style={style.titleServicios}>EMISIÓN DE CERTIFICADOS Y</Text>
            <Text style={style.textButton}>CONSULTA DE DEPÓSITOS JUDICIALES</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.viewServicios}
            activeOpacity={0.7}
            onPress={()=>{navigation.navigate('LinkJudiciales',{link:'https://dalimentos.pj.gob.pe/cortes/ucayali/links_demanda'})}}
          >
            <Image
              source={require('../assets/img/icono-judiciales/5-demanda-alimentos.png')}
              style={style.imgServicios}
            />
            <Text style={style.titleServicios}>DEMANDA DE ALIMENTOS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.viewServicios}
            activeOpacity={0.7}
          >
            <Image
              source={require('../assets/img/icono-judiciales/archivo-general.jpg')}
              style={style.imgServicios}
            />
            <Text style={style.titleServicios}>ARCHIVO GENERAL DE EXPEDIENTES</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default JudicialesScreen;

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
