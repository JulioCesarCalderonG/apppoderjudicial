import { DrawerScreenProps } from '@react-navigation/drawer';
import React,{useEffect} from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image, ScrollView } from 'react-native';
import { RootDrawerParams } from '../navigation/DrawerJudicial';
import { drawerStyle } from '../style/DrawerMenuStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import LogoComponent from '../components/LogoComponent';

interface Props extends DrawerScreenProps<RootDrawerParams, 'CEJ'> { }

const MauScreen = ({navigation}:Props) => {
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
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>
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
      <Text style={style.titulo}>MÓDULO DE ATENCIÓN AL USUARIO - MAU</Text>
      <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={style.containerBtn}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={style.btnCentral}
            onPress={() => {
              navigation.navigate('LinkJudiciales',{link:'https://dalimentos.pj.gob.pe/cortes/ucayali/links_demanda'})
            }}>
            <View 
             style={style.viewIcono}
            >
            <Image
              source={require('../assets/img/iconos/orientacion-1.png')}
              style={style.imgIcon}
            />
            </View>
            <View style={style.viewText}>
             <Text style={style.textBtn}>ORIENTACIÓN JUDICIAL VIRTUAL</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={style.btnCentral}
            onPress={() => {
              navigation.navigate('LinkJudiciales',{link:'https://dalimentos.pj.gob.pe/cortes/ucayali/links_demanda'})
            }}>
            <View 
             style={style.viewIcono}
            >
            <Image
              source={require('../assets/img/iconos/solicita-cita.png')}
              style={style.imgIcon}
            />
            </View>
            <View style={style.viewText}>
             <Text style={style.textBtn}>SOLICITA TU CITA PARA LA ORIENTACIÓN JUDICIAL</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={style.btnCentral}
            onPress={() => {
              navigation.navigate('LinkJudiciales',{link:'https://dalimentos.pj.gob.pe/cortes/ucayali/links_demanda'})
            }}>
            <View 
             style={style.viewIcono}
            >
            <Image
              source={require('../assets/img/iconos/cabina.png')}
              style={style.imgIcon}
            />
            </View>
            <View style={style.viewText}>
             <Text style={style.textBtn}>CABINA DE ACCESO A LA JUSTICIA</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={style.btnCentral}
            onPress={() => {
              navigation.navigate('LinkJudiciales',{link:'https://dalimentos.pj.gob.pe/cortes/ucayali/links_demanda'})
            }}>
            <View 
             style={style.viewIcono}
            >
            <Image
              source={require('../assets/img/iconos/whatsapp.png')}
              style={style.imgIcon}
            />
            </View>
            <View style={style.viewText}>
             <Text style={style.textBtn}>CONSULTA POR WHATSAPP</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={style.btnCentral}
            onPress={() => {
              navigation.navigate('LinkJudiciales',{link:'https://dalimentos.pj.gob.pe/cortes/ucayali/links_demanda'})
            }}>
            <View 
             style={style.viewIcono}
            >
            <Image
              source={require('../assets/img/iconos/consulta-telefonica.png')}
              style={style.imgIcon}
            />
            </View>
            <View style={style.viewText}>
             <Text style={style.textBtn}>CONSULTA VÍA TELEFÓNICA</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={style.btnCentral}
            onPress={() => {
              navigation.navigate('LinkJudiciales',{link:'https://dalimentos.pj.gob.pe/cortes/ucayali/links_demanda'})
            }}>
            <View 
             style={style.viewIcono}
            >
            <Image
              source={require('../assets/img/iconos/califica-atencion.png')}
              style={style.imgIcon}
            />
            </View>
            <View style={style.viewText}>
             <Text style={style.textBtn}>CALIFICA MI ATENCIÓN</Text>
            </View>
          </TouchableOpacity>

        </ScrollView>
    </ImageBackground>
  )
}

export default MauScreen;
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
    textDecorationLine: 'underline'
  },
  containerBtn: {
    marginLeft:30,
    marginRight:30,
    marginBottom:100,
    
  },
  btnCentral: {
    flexDirection:'row',
    backgroundColor: '#960b28',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
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
  viewIcono:{
    width:50,
    left:-10
  },
  imgIcon: {
    width: '100%',
    height: 50,
    marginLeft: 3,
    marginRight: 5,
  },
  viewText:{
    width:200
  },
  textBtn: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});