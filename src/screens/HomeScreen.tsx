import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
interface Props extends StackScreenProps<any, any> { };
export const Home = ({navigation}:Props) => {
  return (
    <View style={style.container}>
      <View style={style.barra}>
        <Text style={style.textBarra}>BIENVENIDO</Text>
      </View>
      {/* <ImageBackground source={require('../assets/img/shipibo4.png')} resizeMode="cover" style={{width:'100%',height:800, justifyContent:'center',alignItems:'center'}}>
      </ImageBackground> */}
      <Image 
        source={require('../assets/img/csjuc2.jpg')}
        style={style.imagePrincipal}
      />
      <Image source={require('../assets/img/pj2.png')} style={style.imageSecundaria} />
      <Text style={style.titulo}>PODER JUDICIAL DEL PERÚ</Text>
      <Text style={style.subTitulo}>Corte Superior de Justicia de Ucayali</Text>
      <View style={style.opciones}>
        <TouchableOpacity
          style={{...style.btn, ...style.btnJudiciales}}
          activeOpacity={0.7}
          onPress={()=>navigation.navigate('ModuloJudicial')}
          >
          <Text style={style.btnText}>Servicios Judiciales</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...style.btn, ...style.btnTransparencia}}
          activeOpacity={0.7}
          onPress={()=>navigation.navigate('ModuloTransparencia')}
          >
          <Text style={style.btnText}>Transparencia</Text>
        </TouchableOpacity>
        
      </View>
      
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
  imagePrincipal: {
    width: '100%',
    height: 300,
    marginBottom: 30,
    marginTop:-250
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
