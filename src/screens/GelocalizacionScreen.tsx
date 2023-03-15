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
  extends DrawerScreenProps<
  RootDrawerTransparenciaParams,
    'Geolocalizacion'
  > {}

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
          <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
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
      style={style.container}>
      <LogoComponent />
      <Text style={style.titulo}>UBICACION GENERAL</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={style.containerBtn}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={style.btnCentral}
            onPress={() => {
              navigation.navigate('Mapa',{lat:0, lng:0});
            }}>
            <Image
              source={require('../assets/img/iconos/juz.png')}
              style={style.imgIcon}
            />
            <Text style={style.textBtn}>SEDE PRINCIPAL UCAYALI</Text>
          </TouchableOpacity>
          <Text style={style.textSubSedes}>SUB SEDES</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={style.btnSecundario}
            onPress={() => {
              navigation.navigate('Mapa',{lat:0, lng:0});
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
              navigation.navigate('Mapa',{lat:0, lng:0});
            }}>
            <Image
              source={require('../assets/img/iconos/juz.png')}
              style={style.imgIcon}
            />
            <Text style={style.textBtn}>SEDE COMISARIA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={style.btnSecundario}
            onPress={() => {
              navigation.navigate('Mapa',{lat:0, lng:0});
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
              navigation.navigate('Mapa',{lat:0, lng:0});
            }}>
            <Image
              source={require('../assets/img/iconos/juz.png')}
              style={style.imgIcon}
            />
            <Text style={style.textBtn}>SEDE CHEROKE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={style.btnSecundario}
            onPress={() => {
              navigation.navigate('Mapa',{lat:0, lng:0});
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
              navigation.navigate('Mapa',{lat:0, lng:0});
            }}>
            <Image
              source={require('../assets/img/iconos/juz.png')}
              style={style.imgIcon}
            />
            <Text style={style.textBtn}>SEDE ESTABLECIMIENTO PENITENCIARIO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={style.btnSecundario}
            onPress={() => {
              navigation.navigate('Mapa',{lat:0, lng:0});
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
              navigation.navigate('Mapa',{lat:0, lng:0});
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
              navigation.navigate('Mapa',{lat:0, lng:0});
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
              navigation.navigate('Mapa',{lat:0, lng:0});
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
              navigation.navigate('Mapa',{lat:0, lng:0});
            }}>
            <Image
              source={require('../assets/img/iconos/juz.png')}
              style={style.imgIcon}
            />
            <Text style={style.textBtn}>SEDE CAMPO VERDE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={style.btnSecundario}
            onPress={() => {
              navigation.navigate('Mapa',{lat:0, lng:0});
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
              navigation.navigate('Mapa',{lat:0, lng:0});
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
              navigation.navigate('Mapa',{lat:0, lng:0});
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
              navigation.navigate('Mapa',{lat:0, lng:0});
            }}>
            <Image
              source={require('../assets/img/iconos/juz.png')}
              style={style.imgIcon}
            />
            <Text style={style.textBtn}>SEDE CONTAMANA</Text>
          </TouchableOpacity>
        </ScrollView>
      
    </ImageBackground>
  )
}

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
    fontSize: 14,
    marginTop: 20,
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  textSubSedes:{
    textAlign:'center',
    color:'black',
    fontSize:12,
    marginTop:15,
    marginBottom:15,
    fontWeight:'bold'
  },
  containerBtn: {
    marginLeft:30,
    marginRight:30,
    marginBottom:100
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
    marginBottom:10
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