import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Container, Row, Col } from 'react-native-flex-grid';
import BotonJudicial from '../components/BotonJudicial';
import { drawerStyle } from '../style/DrawerMenuStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import LogoComponent from '../components/LogoComponent';

interface Props extends DrawerScreenProps<any, any> { };


const JudicialesScreen = ({ navigation }: Props) => {
  useEffect(() => {
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
                fontSize: 30,
                color:'white'

              }}
            />
          </TouchableOpacity>
          <Text style={{fontWeight:'bold', fontSize:16, color:'white'}}> CSJ Ucayali</Text>
        </View>
      ),
      drawerPosition: 'left',
    });
  }, []);

  return (
    <ImageBackground source={require('../assets/img/shipibo-2.png')} resizeMode="cover" style={style.container}>

      <LogoComponent />
      <Text style={style.titulo}>SERVICIOS JUDICIALES</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={style.containerBtn}>
        <Row style={{}}>
          <Col xs="6" sm="6" style={{...style.principal}}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={()=>{navigation.navigate('LinkJudiciales',{link:'https://serjus.pj.gob.pe/certificadohomonimia/Ucayali'})}}
            >
              <Image
                source={require('../assets/img/iconos/papellupa.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>EMISIÓN DE CERTIFICADO DE HOMONIMIA</Text>
            </TouchableOpacity>
          </Col>
          <Col xs="6" sm="6" style={{...style.principal}}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={()=>{navigation.navigate('LinkJudiciales',{link:'https://serjus.pj.gob.pe/seguimientocertificadohomonimia/Ucayali'})}}
            >
              <Image
                source={require('../assets/img/iconos/papellupa.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>SEGIMIENTO DE CERTIFICADO DE HOMONIMIA</Text>
            </TouchableOpacity>
          </Col>
          <Col xs="6" sm="6" style={style.principal}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={()=>{navigation.navigate('LinkJudiciales',{link:'https://serjus.pj.gob.pe/certificadodam/Ucayali'})}}
            >
              <Image
                source={require('../assets/img/iconos/papellupa.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>EMISIÓN DE CERTIFICADO DE DEUDORES ALIMENTARIOS MOROSOS</Text>
            </TouchableOpacity>
          </Col>
          <Col xs="6" sm="6" style={style.principal}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={()=>{navigation.navigate('LinkJudiciales',{link:'https://serjus.pj.gob.pe/seguimientocertificadodam/Ucayali'})}}
            >
              <Image
                source={require('../assets/img/iconos/papellupa.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>SEGUIMIENTO DE CERTIFICADO DE DEUDORES ALIMENTARIOS MOROSOS</Text>
            </TouchableOpacity>
          </Col>
          <Col xs="6" sm="6" style={style.principal}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={()=>{navigation.navigate('LinkJudiciales',{link:'https://serjus.pj.gob.pe/certificadohaj/Ucayali'})}}
            >
              <Image
                source={require('../assets/img/iconos/papellupa.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>SOLICITUD DE HABILITACIÓN DE ARANCELES JUDICIALES</Text>
            </TouchableOpacity>
          </Col>
          <Col xs="6" sm="6" style={style.principal}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={()=>{navigation.navigate('LinkJudiciales',{link:'https://serjus.pj.gob.pe/seguimientocertificadohaj/Ucayali'})}}
            >
              <Image
                source={require('../assets/img/iconos/papellupa.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>SEGUIMIENTO DE SOLICITUD DE HABILITACIÓN DE ARANCELES JUDICIALES</Text>
            </TouchableOpacity>
          </Col>
          <Col xs="6" sm="6" style={style.principal}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={()=>{navigation.navigate('LinkJudiciales',{link:'https://serjus.pj.gob.pe/antecedentespe/Ucayali'})}}
            >
              <Image
                source={require('../assets/img/iconos/papellupa.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>EMISIÓN DE CERTIFICADO DE ANTECEDENTES PENALES PARA EXTRANJEROS</Text>
            </TouchableOpacity>
          </Col>
          <Col xs="6" sm="6" style={style.principal}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={()=>{navigation.navigate('LinkJudiciales',{link:'https://serjus.pj.gob.pe/seguimientoantecedentespe/Ucayali'})}}
            >
              <Image
                source={require('../assets/img/iconos/papellupa.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>SEGUIMIENTO DE CERTIFICADO DE ANTECEDENTES PENALES PARA EXTRANJEROS</Text>
            </TouchableOpacity>
          </Col>
          <Col xs="6" sm="6" style={style.principal}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={()=>{navigation.navigate('LinkJudiciales',{link:'https://cape.pj.gob.pe/cape/'})}}
            >
              <Image
                source={require('../assets/img/iconos/papellupa.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>EMISION DE CERFICADO DE ANTECEDENTES PENALES NACIONALES</Text>
            </TouchableOpacity>
          </Col>
          <Col xs="6" sm="6" style={style.principal}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={()=>{navigation.navigate('LinkJudiciales',{link:'https://casillas.pj.gob.pe/redam/#/'})}}
            >
              <Image
                source={require('../assets/img/iconos/papellupa.png')}
                style={style.imgIcon}
                
              />
              <Text style={style.textBtn}>CONSULTA DE DEUDOR ALIMENTARIO MOROSO</Text>
            </TouchableOpacity>
          </Col>
          <Col xs="6" sm="6" style={style.principal}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={()=>{navigation.navigate('LinkJudiciales',{link:'https://casillas.pj.gob.pe/cap/'})}}  
            >
              <Image
                source={require('../assets/img/iconos/papellupa.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>VERIFICACIÓN DE CERTIFICADOS</Text>
            </TouchableOpacity>
          </Col>
          <Col xs="6" sm="6" style={style.principal}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={()=>{navigation.navigate('LinkJudiciales',{link:'https://dalimentos.pj.gob.pe/cortes/ucayali/links_demanda'})}}  
            >
              <Image
                source={require('../assets/img/iconos/papellupa.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>DEMANDA DE ALIMENTOS</Text>
            </TouchableOpacity>
          </Col>
          <Col xs="6" sm="6" style={style.principal}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={()=>{navigation.navigate('LinkJudiciales',{link:'https://apps.pj.gob.pe/cejSupremo/'})}}  
            >
              <Image
                source={require('../assets/img/iconos/papellupa.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>CONSULTA DE EXPEDIENTES JUDICIALES – SUPREMO</Text>
            </TouchableOpacity>
          </Col>
          <Col xs="6" sm="6" style={style.principal}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={style.btnCategoria}
              onPress={()=>{navigation.navigate('LinkJudiciales',{link:'https://cej.pj.gob.pe/cej/forms/busquedaform.html'})}} 
            >
              <Image
                source={require('../assets/img/iconos/papellupa.png')}
                style={style.imgIcon}
              />
              <Text style={style.textBtn}>CONSULTA DE EXPEDIENTES JUDICIALES – SUPERIOR</Text>
            </TouchableOpacity>
          </Col>
        </Row>

      </ScrollView>
    </ImageBackground>
  );
};

export default JudicialesScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: -100,
    marginBottom: -100
  },
  titulo: {
    textAlign: 'center',
    fontWeight: '700',
    color: 'black',
    fontSize: 14,
    marginTop: 20,
    marginBottom: 20,
    textDecorationLine: 'underline'
  },
  containerBtn: {
    padding:10
  },
  principal:{
    marginBottom:10,
    width:'48%',
    marginLeft:5
},
btnCategoria: {
    backgroundColor:'#960b28',
    flexDirection:'row',
    alignItems:'center',
    height:70,
    borderRadius:5,
    borderColor:'#ccc',
    borderTopWidth:2,
    borderBottomWidth:2,
    borderLeftWidth:2,
    borderRightWidth:2,
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
    width:35,
    height:35,
    marginLeft:3
},
textBtn:{
    color:'white',
    fontSize:9,
    fontWeight:'bold',
    marginRight:39
}
});
