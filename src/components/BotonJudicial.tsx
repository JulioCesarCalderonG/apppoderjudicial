import React from 'react';
import {Col} from 'react-native-flex-grid';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

interface Props{
    titulo:string,
    icono:string,
    onPress:()=>void
}

const BotonJudicial = ({titulo,icono, onPress}:Props) => {
  return (
      <TouchableOpacity 
        activeOpacity={0.7}
        style={style.btnCategoria}
        onPress={onPress}
      >
        <Image
            source={require(`../assets/img/iconos/${icono}.png`)}
            style={style.imgIcon}
        />
        <Text style={style.textBtn}>{titulo}</Text>
      </TouchableOpacity>
  );
};

export default BotonJudicial;

const style = StyleSheet.create({
    principal:{
        marginBottom:10
    },
    btnCategoria: {
        backgroundColor:'#960b28',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        borderRadius:5,
        padding:10,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
    },
    imgIcon:{
        width:25,
        height:25,
        marginRight:5,
        marginLeft:3
    },
    textBtn:{
        color:'white',
        fontSize:9,
        fontWeight:'bold',
    }
})