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
import GrupoJudicial from '../components/GrupoJudicial';

interface Props extends DrawerScreenProps<any, any> {}

const JudicialesScreen = ({navigation}: Props) => {
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
      <Text style={style.titulo}>SERVICIOS JUDICIALES</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={style.containerBtn}>
        <View style={style.general}>
          <GrupoJudicial
            titulo="CONSULTA DE EXPEDIENTES JUDICIALES"
            subTitulo="(No Penales)"
            img={require('../assets/img/icono-judiciales/1.1-onsultadeexpediente.jpg')}
            onPress={() => {
              navigation.navigate('CEJ');
            }}
          />
          <GrupoJudicial
            titulo="MÓDULO DE ATENCIÓN AL USUARIO - MAU"
            subTitulo="(Todas las materias)"
            img={require('../assets/img/icono-judiciales/modulo-atencion.png')}
            onPress={() => {
              navigation.navigate('MAU');
            }}
          />
          <GrupoJudicial
            titulo="MESA DE PARTES VIRTUAL"
            subTitulo=""
            img={require('../assets/img/icono-judiciales/3-1-mesadepartes.png')}
            onPress={() => {
              navigation.navigate('MP');
            }}
          />
          <GrupoJudicial
            titulo="CERTIFICADO ELECTRÓNICO DE ANTECEDENTES PENALES"
            /* titulo="EMISIÓN DE CERTIFICADOS ELECTRÓNICOS DE ANTECEDENTES PENALES" */
            subTitulo=""
            img={require('../assets/img/icono-judiciales/antecedentespenales.png')}
            onPress={() => {
              navigation.navigate('Penales', {
                link: 'https://cape.pj.gob.pe/cape/',
              });
            }}
          />
          <GrupoJudicial
            titulo="ARANCELES JUDICIALES"
            subTitulo=""
            img={require('../assets/img/icono-judiciales/aranceles.jpg')}
            onPress={() => {
              navigation.navigate('PDF');
            }}
          />
          <GrupoJudicial
            titulo="DEMANDA DE ALIMENTOS"
            subTitulo=""
            img={require('../assets/img/icono-judiciales/demanda2.jpg')}
            onPress={() => {
              navigation.navigate('LinkJudiciales', {
                link: 'https://dalimentos.pj.gob.pe/cortes/ucayali/links_demanda',
              });
            }}
          />
          <GrupoJudicial
            titulo="ARCHIVO GENERAL DE EXPEDIENTES"
            subTitulo=""
            img={require('../assets/img/icono-judiciales/archivo-general.jpg')}
            onPress={() => {
              navigation.navigate('LinkJudiciales', {
                link: 'https://svsarchivisticos.pj.gob.pe/archi/#/',
              });
            }}
          />
          <GrupoJudicial
            titulo="EL JUEZ TE ESCUCHA - PROGRAMA TU CITA"
            subTitulo=""
            img={require('../assets/img/icono-judiciales/conoce-juez.png')}
            onPress={() => {
              navigation.navigate('LinkJudiciales', {
                link: 'https://cej.pj.gob.pe/citas/pages/seguridad/login.xhtml',
              });
            }}
          />
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
});
