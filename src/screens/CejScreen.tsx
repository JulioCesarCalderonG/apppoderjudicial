//Copiar desde aca
import { DrawerScreenProps } from '@react-navigation/drawer';
import React,{useEffect} from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image, ScrollView } from 'react-native';
import { RootDrawerParams } from '../navigation/DrawerJudicial';
import { drawerStyle } from '../style/DrawerMenuStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import LogoComponent from '../components/LogoComponent';

interface Props extends DrawerScreenProps<RootDrawerParams, 'CEJ'> { }
//Hasta aca
const CejScreen = ({navigation}:Props) => {
  // Copiar desde aca
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
      <Text style={style.titulo}>CONSULTA DE EXPEDIENTE JUDICIALES</Text>
      <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={style.containerBtn}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={style.btnCentral}
            onPress={() => {
              navigation.navigate('LinkJudiciales',{link:'https://cej.pj.gob.pe/cej/forms/busquedaform.html'})
            }}>
            <View 
             style={style.viewIcono}
            >
            <Image
              source={require('../assets/img/iconos/expe.png')}
              style={style.imgIcon}
            />
            </View>
            <View style={style.viewText}>
             <Text style={style.textBtn}>EXPEDIENTES JUDICIALES CORTE SUPERIOR</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={style.btnCentral}
            onPress={() => {
              navigation.navigate('LinkJudiciales',{link:'https://apps.pj.gob.pe/cejSupremo/'})
            }}>
            <View 
             style={style.viewIcono}
            >
            <Image
              source={require('../assets/img/iconos/expe.png')}
              style={style.imgIcon}
            />
            </View>
            <View style={style.viewText}>
             <Text style={style.textBtn}>EXPEDIENTES JUDICIALES CORTE SUPREMA</Text>
            </View>
          </TouchableOpacity>

        </ScrollView>
    </ImageBackground>
  )
  //Termina aca
}
export default CejScreen;
// Copiar desde aca
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
// Hasta aca