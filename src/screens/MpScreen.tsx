import { DrawerScreenProps } from '@react-navigation/drawer';
import React,{useEffect} from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image, ScrollView } from 'react-native';
import { RootDrawerParams } from '../navigation/DrawerJudicial';
import { drawerStyle } from '../style/DrawerMenuStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import LogoComponent from '../components/LogoComponent';

interface Props extends DrawerScreenProps<RootDrawerParams, 'MP'> { }

const MpScreen = ({navigation}:Props) => {
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
      <Text style={style.titulo}>MESA DE PARTES VIRTUAL</Text>
      <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={style.containerBtn}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={style.btnCentral}
            onPress={() => {
              navigation.navigate('LinkJudiciales',{link:'https://mpv.pj.gob.pe/'})
            }}>
            <View 
             style={style.viewIcono}
            >
            <Image
              source={require('../assets/img/iconos/correo1.png')}
              style={style.imgIcon}
            />
            </View>
            <View style={style.viewText}>
             <Text style={style.textBtn}>MESA DE PARTES ELECTRÓNICA PENAL</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={style.btnCentral}
            onPress={() => {
              navigation.navigate('LinkJudiciales',{link:'https://casillas.pj.gob.pe/sinoe/login.xhtml'})
            }}>
            <View 
             style={style.viewIcono}
            >
            <Image
              source={require('../assets/img/iconos/correo2.png')}
              style={style.imgIcon}
            />
            </View>
            <View style={style.viewText}>
             <Text style={style.textBtn}>MESA DE PARTES ELECTRÓNICA (No penales)</Text>
            </View>
          </TouchableOpacity>
          <View style={style.btnCentral}>
          <View style={style.viewIcono}>
            <Image
              source={require('../assets/img/iconos/correo3.png')}
              style={style.imgIcon}
            />
          </View>
          <View style={style.viewText}>
            <Text style={{...style.textBtn, fontSize:11}}>MESA DE PARTES ELECTRÓNICA ADMINISTRATIVA</Text>
            <View style={style.viewSubButton}>
              <TouchableOpacity 
                style={style.btnSub}
                onPress={() => {
                  navigation.navigate('LinkJudiciales', {
                    link: 'https://sgd.pj.gob.pe/mpea/inicio',
                  });
                }}
              >
                <Icon
                  name="caret-forward-outline"
                  style={{
                    color: '#960b28',
                  }}
                />
                <Text style={style.btnText}>Registrar</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={style.btnSub}
                onPress={() => {
                  navigation.navigate('LinkJudiciales', {
                    link: 'https://sgd.pj.gob.pe/mpea/inicio-seguimiento',
                  });
                }}
              >
                <Icon
                  name="search"
                  style={{
                    color: '#960b28',
                  }}
                />
                <Text style={style.btnText}>Seguimiento</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
          {/* <TouchableOpacity
            activeOpacity={0.7}
            style={style.btnCentral}
            onPress={() => {
              navigation.navigate('LinkJudiciales',{link:'https://sgd.pj.gob.pe/mpea/inicio'})
            }}>
            <View 
             style={style.viewIcono}
            >
            <Image
              source={require('../assets/img/iconos/consulta.png')}
              style={style.imgIcon}
            />
            </View>
            <View style={style.viewText}>
             <Text style={style.textBtn}>MESA DE PARTES ELECTRÓNICA ADMINISTRATIVA</Text>
            </View>
          </TouchableOpacity> */}
          
        </ScrollView>
    </ImageBackground>
  )
}

export default MpScreen;

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
  viewSubButton: {
    flexDirection: 'row',
    marginTop: 5,
  },
  btnSub: {
    backgroundColor: 'white',
    width: 100,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
  btnText: {
    color: '#960b28',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:12
  }
});