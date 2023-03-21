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
import apiPj from '../api/apiPj';
import apiSadm from '../api/apiSadm';
import apiSage from '../api/apiSage';
import apiSata from '../api/apiSata';
import apiScampo from '../api/apiScampo';
import apiSchero from '../api/apiSchero';
import apiScomi from '../api/apiScomi';
import apiSconta from '../api/apiSconta';
import apiSep from '../api/apiSep';
import apiSman from '../api/apiSman';
import apiSmc from '../api/apiSmc';
import apiSp from '../api/apiSp';
import apiSpa from '../api/apiSpa';
import apiSpi from '../api/apiSpi';
import apiSpu from '../api/apiSpu';
import apiSyari from '../api/apiSyari';

interface Props
  extends DrawerScreenProps<
  RootDrawerTransparenciaParams,
    'DirectorioGeneral'
  > {}

const DirectorioGeneralScreen = ({navigation}: Props) => {
  const {dataPj} =apiPj();
  const {dataSadm} =apiSadm();
  const {dataSage} =apiSage();
  const {dataSata} =apiSata();
  const {dataScampo} =apiScampo();
  const {dataSchero} =apiSchero();
  const {dataScomi} =apiScomi();
  const {dataSconta} =apiSconta();
  const {dataSep} =apiSep();
  const {dataSman} =apiSman();
  const {dataSmc} =apiSmc();
  const {dataSp} =apiSp();
  const {dataSpa} =apiSpa();
  const {dataSpi} =apiSpi();
  const {dataSpu} =apiSpu();
  const {dataSyari} =apiSyari();
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
        opacity: 0.4
      }}
      >
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
              navigation.navigate('Directorio',{telefono:'061-58-6369',dato:dataPj!});
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
              navigation.navigate('Directorio', {telefono:'061-58-6369',dato:dataSadm});
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
              navigation.navigate('Directorio', {telefono:'061-58-6369',dato:dataSage});
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
              navigation.navigate('Directorio', {telefono:'061-58-6369',dato:dataSp});
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
              navigation.navigate('Directorio',{telefono:'061-58-6369',dato:dataSmc});
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
              navigation.navigate('Directorio',{telefono:'061-58-6369',dato:dataSchero});
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
              navigation.navigate('Directorio',{telefono:'061-58-6369',dato:dataScomi});
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
              navigation.navigate('Directorio',{telefono:'061-58-6369',dato:dataSman});
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
              navigation.navigate('Directorio',{telefono:'061-58-6369',dato:dataSyari});
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
              navigation.navigate('Directorio', {telefono:'061-58-6369',dato:dataSep});
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
              navigation.navigate('Directorio',{telefono:'061-58-6369',dato:dataScampo});
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
              navigation.navigate('Directorio', {telefono:'061-58-6369',dato:dataSpi});
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
              navigation.navigate('Directorio',{telefono:'061-58-6369',dato:dataSpa});
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
              navigation.navigate('Directorio', {telefono:'061-58-6369',dato:dataSpu});
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
              navigation.navigate('Directorio', {telefono:'061-58-6369',dato:dataSconta});
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
              navigation.navigate('Directorio', {telefono:'061-58-6369',dato:dataSata});
            }}>
            <Image
              source={require('../assets/img/iconos/juz.png')}
              style={style.imgIcon}
            />
            <Text style={style.textBtn}>SEDE ATALAYA</Text>
          </TouchableOpacity>
        </ScrollView>
      
    </ImageBackground>
  );
};

export default DirectorioGeneralScreen;

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
  textSubSedes:{
    textAlign:'center',
    color:'black',
    fontSize:15,
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
