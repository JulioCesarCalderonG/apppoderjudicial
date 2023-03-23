import React, {useEffect} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import {RootDrawerTransparenciaParams} from '../navigation/DrawerTransparencia';
import {drawerStyle} from '../style/DrawerMenuStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import LogoComponent from '../components/LogoComponent';

interface Props
  extends DrawerScreenProps<RootDrawerTransparenciaParams, 'Geolocalizacion'> {}

const GelocalizacionScreen = ({navigation}: Props) => {
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
      <Text style={style.titulo}>SEDE PRINCIPAL</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={style.containerBtn}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnCentral}
          onPress={() => {
            navigation.navigate('Mapa', {
              lat: -8.384213,
              lng: -74.53284,
              titulo: 'CORTE SUPERIOR DE JUSTICIA DE UCAYALI',
              direccion: 'Jr. Ucayali 499',
              img: require('../assets/img/icono-sedes/sede-central.jpg'),
            });
          }}>
          <Image
            source={require('../assets/img/iconos/juz.png')}
            style={style.imgIcon}
          />
          <Text style={style.textBtn}>SEDE CENTRAL</Text>
        </TouchableOpacity>
        <Text style={style.textSubSedes}>SUB SEDES</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnSecundario}
          onPress={() => {
            navigation.navigate('Mapa', {
              lat: -8.384431,
              lng: -74.529495,
              titulo: 'SEDE ADMINISTRATIVA',
              direccion: 'Jr. Tarapaca 913-919',
              img: require('../assets/img/icono-sedes/administrativa.png'),
            });
          }}>
          <Image
            source={require('../assets/img/iconos/juz.png')}
            style={style.imgIcon}
          />
          <Text style={style.textBtn}>SEDE ADMINISTRACION</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnSecundario}
          onPress={() => {
            navigation.navigate('Mapa', {
              lat: -8.2301,
              lng: -74.31513,
              titulo: 'SEDE ARCHIVO GENERAL DE EXPEDIENTES',
              direccion: 'Jr. Tarapaca 764',
              img: require('../assets/img/iconos-negro/oficina.png'),
            });
          }}>
          <Image
            source={require('../assets/img/iconos/juz.png')}
            style={style.imgIcon}
          />
          <Text style={style.textBtn}>SEDE ARCHIVO GENERAL DE EXPEDIENTES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnSecundario}
          onPress={() => {
            navigation.navigate('Mapa', {
              lat: -8.3799143,
              lng: -74.5368813,
              titulo: 'SEDE SAENZ PEÑA',
              direccion: 'Av. Saenz Peña 360',
              img: require('../assets/img/icono-sedes/saenzpeña.png'),
            });
          }}>
          <Image
            source={require('../assets/img/iconos/juz.png')}
            style={style.imgIcon}
          />
          <Text style={style.textBtn}>SEDE SAENZ PEÑA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnSecundario}
          onPress={() => {
            navigation.navigate('Mapa', {
              lat: -8.374954,
              lng: -74.528032,
              titulo: 'SEDE MANCO CAPAC',
              direccion: 'Jr. Manco Capac 234',
              img: require('../assets/img/iconos-negro/oficina.png'),
            });
          }}>
          <Image
            source={require('../assets/img/iconos/juz.png')}
            style={style.imgIcon}
          />
          <Text style={style.textBtn}>SEDE MANCO CAPAC</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnSecundario}
          onPress={() => {
            navigation.navigate('Mapa', {
              lat: -8.374024,
              lng: -74.541225,
              titulo: 'SEDE FAMILIA',
              direccion: 'Jr. Sanchez Cerro 250',
              img: require('../assets/img/iconos-negro/oficina.png'),
            });
          }}>
          <Image
            source={require('../assets/img/iconos/juz.png')}
            style={style.imgIcon}
          />
          <Text style={style.textBtn}>SEDE FAMILIA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnSecundario}
          onPress={() => {
            navigation.navigate('Mapa', {
              lat: -8.383404,
              lng: -74.533478,
              titulo: 'SEDE JUZGADO DE PAZ LETRADO PENAL',
              direccion: 'Psje. Lazaro Cohen 171',
              img: require('../assets/img/iconos-negro/oficina.png'),
            });
          }}>
          <Image
            source={require('../assets/img/iconos/juz.png')}
            style={style.imgIcon}
          />
          <Text style={style.textBtn}>SEDE JUZGADO DE PAZ LETRADO PENAL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnSecundario}
          onPress={() => {
            navigation.navigate('Mapa', {
              lat: -8.399883,
              lng: -74.541444,
              titulo: 'SEDE MANANTAY',
              direccion: 'Av. Tupac Amaru 733',
              img: require('../assets/img/iconos-negro/oficina.png'),
            });
          }}>
          <Image
            source={require('../assets/img/iconos/juz.png')}
            style={style.imgIcon}
          />
          <Text style={style.textBtn}>SEDE MANANTAY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnSecundario}
          onPress={() => {
            navigation.navigate('Mapa', {
              lat: -8.359325,
              lng: -74.571866,
              titulo: 'SEDE YARINACOCHA',
              direccion: 'Av. Yarinacocha 900',
              img: require('../assets/img/iconos-negro/oficina.png'),
            });
          }}>
          <Image
            source={require('../assets/img/iconos/juz.png')}
            style={style.imgIcon}
          />
          <Text style={style.textBtn}>SEDE YARINACOCHA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnSecundario}
          onPress={() => {
            navigation.navigate('Mapa', {
              lat: -8.405408,
              lng: -74.631298,
              titulo: 'SALA PENAL',
              direccion: 'C.F.B Km 12',
              img: require('../assets/img/iconos-negro/oficina.png'),
            });
          }}>
          <Image
            source={require('../assets/img/iconos/juz.png')}
            style={style.imgIcon}
          />
          <Text style={style.textBtn}>SALA PENAL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnSecundario}
          onPress={() => {
            navigation.navigate('Mapa', {
              lat: -8.606274,
              lng: -74.306288,
              titulo: 'SEDE MASISEA',
              direccion: 'Jr. Padre Plaza Mz. 24 Lt. 16',
              img: require('../assets/img/icono-sedes/masisea.png'),
            });
          }}>
          <Image
            source={require('../assets/img/iconos/juz.png')}
            style={style.imgIcon}
          />
          <Text style={style.textBtn}>SEDE MASISEA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnSecundario}
          onPress={() => {
            navigation.navigate('Mapa', {
              lat: -8.383404,
              lng: -74.533478,
              titulo: 'MODULO BÁSICO DE JUSTICIA DE CAMPO VERDE',
              direccion: 'Jr. Jose Pezo 285',
              img: require('../assets/img/iconos-negro/oficina.png'),
            });
          }}>
          <Image
            source={require('../assets/img/iconos/juz.png')}
            style={style.imgIcon}
          />
          <Text style={style.textBtn}>MODULO BÁSICO DE JUSTICIA DE CAMPO VERDE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnSecundario}
          onPress={() => {
            navigation.navigate('Mapa', {
              lat: -9.380494,
              lng: -74.966924,
              titulo: 'SEDE PUERTO INCA',
              direccion: 'Av. Sanchez Cerro s/n con Jr. 28 de julio s/n',
              img: require('../assets/img/icono-sedes/puertoinca.png'),
            });
          }}>
          <Image
            source={require('../assets/img/iconos/juz.png')}
            style={style.imgIcon}
          />
          <Text style={style.textBtn}>SEDE PUERTO INCA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnSecundario}
          onPress={() => {
            navigation.navigate('Mapa', {
              lat: -9.041336,
              lng: -75.510684,
              titulo: 'SEDE PADRE ABAD',
              direccion: 'Esp. Calle 9 Rosales con calle 13',
              img: require('../assets/img/icono-sedes/padreabad.png'),
            });
          }}>
          <Image
            source={require('../assets/img/iconos/juz.png')}
            style={style.imgIcon}
          />
          <Text style={style.textBtn}>SEDE PADRE ABAD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnSecundario}
          onPress={() => {
            navigation.navigate('Mapa', {
              lat: -9.771341,
              lng: -70.709628,
              titulo: 'SEDE PURUS',
              direccion: 'Av. Luiz Muñoz Nadal s/n',
              img: require('../assets/img/icono-sedes/purus.png'),
            });
          }}>
          <Image
            source={require('../assets/img/iconos/juz.png')}
            style={style.imgIcon}
          />
          <Text style={style.textBtn}>SEDE PURUS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnSecundario}
          onPress={() => {
            navigation.navigate('Mapa', {
              lat: -7.3475367,
              lng: -75.0012951,
              titulo: 'SEDE CONTAMANA',
              direccion: 'Calle PetroPerú, II Etapa Mz. 94 Lt.10',
              img: require('../assets/img/icono-sedes/contamana.png'),
            });
          }}>
          <Image
            source={require('../assets/img/iconos/juz.png')}
            style={style.imgIcon}
          />
          <Text style={style.textBtn}>SEDE CONTAMANA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnSecundario}
          onPress={() => {
            navigation.navigate('Mapa', {
              lat: -10.730321,
              lng: -73.752993,
              titulo: 'SEDE ATALAYA',
              direccion: 'Jr. Purus con Jr. Pangoa s/n',
              img: require('../assets/img/icono-sedes/atalaya.png'),
            });
          }}>
          <Image
            source={require('../assets/img/iconos/juz.png')}
            style={style.imgIcon}
          />
          <Text style={style.textBtn}>SEDE ATALAYA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnSecundario}
          onPress={() => {
            navigation.navigate('Mapa', {
              lat: -6.393472,
              lng: -75.116838,
              titulo: 'SEDE SARAYACU',
              direccion: 'Av. Celso Sotomarino s/n',
              img: require('../assets/img/icono-sedes/sarayacu.png'),
            });
          }}>
          <Image
            source={require('../assets/img/iconos/juz.png')}
            style={style.imgIcon}
          />
          <Text style={style.textBtn}>SEDE SARAYACU</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default GelocalizacionScreen;
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
  textSubSedes: {
    textAlign: 'center',
    color: 'black',
    fontSize: 15,
    marginTop: 15,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  containerBtn: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 100,
  },
  btnCentral: {
    backgroundColor: '#960b28',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  btnSecundario: {
    backgroundColor: '#960b28',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginBottom: 10,
  },
  imgIcon: {
    width: 30,
    height: 30,
    marginLeft: 3,
    marginRight: 5,
  },
  textBtn: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
