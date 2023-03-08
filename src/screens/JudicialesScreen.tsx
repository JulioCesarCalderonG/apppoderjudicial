import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import {Container, Row, Col} from 'react-native-flex-grid';
import BotonJudicial from '../components/BotonJudicial';

interface Props extends DrawerScreenProps<any,any> {};


const JudicialesScreen = ({navigation}:Props) => {
  return (
    <View style={style.container}>
    
      <Text style={style.titulo}>SERVICIOS JUDICIALES</Text>
      <ScrollView 
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={style.containerBtn}>
        <Row>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE HOMONIMIA' icono='a' onPress={()=>{navigation.navigate('LinkJudiciales',{link:'asas'})}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE DEUDORES ALIMENTARIOS MOROSOS' icono='b' onPress={()=>{}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE HOMONIMIA' icono='a' onPress={()=>{}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE DEUDORES ALIMENTARIOS MOROSOS' icono='b' onPress={()=>{}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE HOMONIMIA' icono='a' onPress={()=>{}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE DEUDORES ALIMENTARIOS MOROSOS' icono='b' onPress={()=>{}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE HOMONIMIA' icono='a' onPress={()=>{}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE DEUDORES ALIMENTARIOS MOROSOS' icono='b' onPress={()=>{}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE HOMONIMIA' icono='a' onPress={()=>{}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE DEUDORES ALIMENTARIOS MOROSOS' icono='b' onPress={()=>{}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE HOMONIMIA' icono='a' onPress={()=>{}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE DEUDORES ALIMENTARIOS MOROSOS' icono='b' onPress={()=>{}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE HOMONIMIA' icono='a' onPress={()=>{}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE DEUDORES ALIMENTARIOS MOROSOS' icono='b' onPress={()=>{}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE HOMONIMIA' icono='a' onPress={()=>{}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE DEUDORES ALIMENTARIOS MOROSOS' icono='b' onPress={()=>{}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE HOMONIMIA' icono='a' onPress={()=>{}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE DEUDORES ALIMENTARIOS MOROSOS' icono='b' onPress={()=>{}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE HOMONIMIA' icono='a' onPress={()=>{}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE DEUDORES ALIMENTARIOS MOROSOS' icono='b' onPress={()=>{}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE HOMONIMIA' icono='a' onPress={()=>{}}/>
          <BotonJudicial titulo='EMISION DE CERTIFICADO DE DEUDORES ALIMENTARIOS MOROSOS' icono='b' onPress={()=>{}}/>
        </Row>
      
    </ScrollView>
    </View>
  );
};

export default JudicialesScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titulo:{
    textAlign:'center',
    fontWeight:'bold',
    color:'black',
    fontSize:14,
    marginTop:20,
    marginBottom:20,
    textDecorationLine:'underline'
  },
  containerBtn:{
    marginLeft:10,
    marginRight:10
  }
});
