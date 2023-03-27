import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props{
    titulo:string;
    img:any,
    onPress: ()=>void
}

const GrupoTransparencia = ({titulo,img,onPress}:Props) => {
  return (
    <TouchableOpacity
      style={style.viewServicios}
      activeOpacity={0.7}
      onPress={onPress}>
      <Image source={img} style={{...style.imgServicios}}  resizeMode='stretch'/>
      <Text style={style.titleServicios}>{titulo}</Text>
    </TouchableOpacity>
  );
};

export default GrupoTransparencia;

const style = StyleSheet.create({
  viewServicios: {
    width: '85%',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 3,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 5,
  },
  imgServicios: {
    width: '80%',
    height: 130,
    margin: 5,
    borderRadius: 10,
  },
  titleServicios: {
    color: '#960B28',
    fontWeight: '700',
    fontSize: 14,
    marginTop: 3,
    textAlign:'center',
    width:'99%'
  },
  buttonServicios: {
    backgroundColor: 'red',
  },
  textButton: {
    color: '#960B28',
    fontWeight: '700',
  },
});
