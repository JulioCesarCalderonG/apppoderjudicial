import React,{useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { drawerStyle } from '../style/DrawerMenuStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
//interface Props extends DrawerScreenProps<any, any> { };
interface Props extends StackScreenProps<any, any> { };
export const Home = ({navigation}:Props) => {
/*   useEffect(() => {
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
                fontSize:35,
                color:'white'
              }}
             />
          </TouchableOpacity>
          <Text style={{fontWeight:'bold', fontSize:16, color:'white'}}> CSJ Ucayali</Text>
        </View>
      ),
      drawerPosition: 'left',
    });
  }, []); */
  return (
    
      <ImageBackground source={require('../assets/img/shipibo-2.png')} resizeMode="cover" style={style.container}>
      
      <View style={style.contentImage}>
      <Image 
        source={require('../assets/img/imagen-pj.png')}
        style={style.imagePrincipal}
        resizeMode="stretch"
      />
      </View>
      <Image source={require('../assets/img/pj2.png')} style={style.imageSecundaria} />
      <Text style={style.titulo}>PODER JUDICIAL DEL PERÚ</Text>
      <Text style={style.subTitulo}>Corte Superior de Justicia de Ucayali</Text>
      <View style={style.opciones}>
        <TouchableOpacity
          style={{...style.btn, ...style.btnJudiciales}}
          activeOpacity={0.7}
          onPress={()=>navigation.navigate('DrawerJudicial')}
          >
          <Text style={style.btnText}>Servicios Judiciales</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...style.btn, ...style.btnTransparencia}}
          activeOpacity={0.7}
          onPress={()=>navigation.navigate('DrawerTransparencia')}
          >
          <Text style={style.btnText}>Transparencia</Text>
        </TouchableOpacity>
        
      </View>
      </ImageBackground>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom:-120,
    marginTop:-120
  },
  barra:{
    width:'100%',
    height:55,
    backgroundColor:'#960b28',
    position:'absolute',
    top:0,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    zIndex:999
  },
  textBarra:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',
  },
  opciones: {
    flexDirection: 'row',
  },
  contentImage:{
    width:'100%',
  },
  imagePrincipal: {
    width: '100%',
    height: 200,
    marginBottom: 30,
    marginTop:-220,
    
  },
  imageSecundaria:{
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  titulo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  subTitulo: {
    color: 'black',
    fontWeight: '400',
    fontSize: 14,
    marginBottom: 20,
  },
  btn: {
    padding: 10,
    backgroundColor: '#960b28',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  btnJudiciales: {
    marginRight: 10,
  },
  btnTransparencia: {
    marginLeft: 10,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
