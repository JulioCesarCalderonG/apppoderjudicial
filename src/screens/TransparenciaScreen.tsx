import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  Linking
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
            titulo="REDES SOCIALES"
            img={require('../assets/img/redes/redes2.jpg')}
            onPress={() => {
              navigation.navigate('Redes');
            }}
          />
        <GrupoTransparencia
            titulo="TERMINOS JURIDICOS"
            subtitulo='(Español - Shipibo)'
            img={require('../assets/img/icono-judiciales/terminos-juridicos.png')}
            onPress={() => {
              navigation.navigate('Terminos');
            }}
          />
          <GrupoTransparencia
            titulo="CONVOCATORIAS CAS"
            img={require('../assets/img/icono-judiciales/convocatorias-pj.png')}
            onPress={() => {
              navigation.navigate('Convocatoria', {
                link: 'https://aplicativo.pj.gob.pe/psep/wfrmConvocatoriasV.aspx?TCon=C',
              });
            }}
          />
          <GrupoTransparencia
            titulo="PLAN ANUAL DE CONTRATACIONES - PAC"
            img={require('../assets/img/icono-judiciales/Oscee.jpg')}
            onPress={() => {
              navigation.navigate('Osce', {
                link: 'https://prodapp4.seace.gob.pe/pac3-publico/pages/buscadorPPpublico.xhtml',
              });
            }}
          />
          <GrupoTransparencia
            titulo="CONSULTA AMIGABLE - MEF"
            img={require('../assets/img/icono-judiciales/amigable2.png')}
            onPress={() => {
              navigation.navigate('LinkTransparencia', {
                link: 'https://apps5.mineco.gob.pe/transparencia/Navegador/default.aspx',
              });
            }}
          />
          <GrupoTransparencia
            titulo="RESOLUCIONES ADMINISTRATIVAS"
            img={require('../assets/img/icono-judiciales/5-resoluciones-administrativas.jpg')}
            onPress={() => {
              navigation.navigate('LinkTransparencia', {
                link: 'https://www.gob.pe/csjucayali',
              });
            }}
          />
          <GrupoTransparencia
            titulo="GEOLOCALIZACIÓN"
            img={require('../assets/img/icono-judiciales/geocalizacion.png')}
            onPress={() => {
              navigation.navigate('Geolocalizacion');
            }}
          />
          <GrupoTransparencia
            titulo="DIRECTORIO TELEFÓNICO"
            img={require('../assets/img/icono-judiciales/telefonia.png')}
            onPress={() => {
              navigation.navigate('DirectorioGeneral');
            }}
          />
          <GrupoTransparencia
            titulo="LIBRO DE RECLAMACIONES"
            img={require('../assets/img/icono-judiciales/libroreclamo.png')}
            onPress={() => {
              navigation.navigate('LinkTransparencia', {
                link: 'https://www.pj.gob.pe/wps/wcm/connect/cortesuprema/s_cortes_suprema_home/as_servicios/as_enlaces_de_interes/as_libro_de_reclamaciones/libro_reclamaciones_url',
              });
            }}
          />
          <GrupoTransparencia
            titulo="BUZÓN DE SUGERENCIAS"
            img={require('../assets/img/icono-judiciales/buzonsugerencias.png')}
            onPress={() => {
              navigation.navigate('LinkTransparencia', {
                link: 'https://www.pj.gob.pe/wps/wcm/connect/cortesuprema/s_cortes_suprema_home/as_servicios/as_enlaces_de_interes/as_buzon_sugerencias',
              });
            }}
          />
          <GrupoTransparencia
            titulo="ODANC"
            img={require('../assets/img/icono-judiciales/odanc.png')}
            onPress={() => {
              navigation.navigate('Odecma');
            }}
          />
          
          {/* <GrupoTransparencia
            titulo="DECISIONES JUDICIALES"
            img={require('../assets/img/icono-judiciales/7-decisiones-judiciales.jpg')}
            onPress={() => {
              navigation.navigate('LinkTransparencia', {
                link: 'https://gestionsij.pj.gob.pe/sentidoFallo-web/#/busqueda',
              });
            }}
          /> */}
          {/* <GrupoTransparencia
            titulo="PROGRAMACIÓN DE AUDIENCIAS"
            img={require('../assets/img/icono-judiciales/8-programacionaudiencias.jpg')}
            onPress={() => {
              navigation.navigate('LinkTransparencia', {
                link: 'https://apps.pj.gob.pe/guiaprogramacion/',
              });
            }}
          /> */}
          {/* <GrupoTransparencia
            titulo="CONOCE A TU JUEZ"
            img={require('../assets/img/icono-judiciales/conoce-juez.png')}
            onPress={() => {
              navigation.navigate('LinkTransparencia', {
                link: 'https://sap.pj.gob.pe/casillero-digital-web/#/conoce-tu-juez',
              });
            }}
          /> */}
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
