import React, {useEffect} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  SafeAreaView
} from 'react-native';
import {RootDrawerTransparenciaParams} from '../navigation/DrawerTransparencia';
import {drawerStyle} from '../style/DrawerMenuStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import LogoComponent from '../components/LogoComponent';
import {apiGeneral} from '../api/apiGeneral';

interface Props
  extends DrawerScreenProps<
    RootDrawerTransparenciaParams,
    'DirectorioGeneral'
  > {}

const DirectorioGeneralScreen = ({navigation}: Props) => {
  const {dataGe} = apiGeneral();
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
        opacity: 0.2,
      }}>
      <LogoComponent />
      <Text style={style.titulo}>DIRECTORIO TELEFONICO</Text>
      <Text style={style.subTitulo}>Telefono: 061-58 6369</Text>
      <SafeAreaView
        style={style.containerBtn}>
        <FlatList
          data={dataGe}
          renderItem={(item) =>
            (item.index % 2 === 0) ? 
              <View style={{...style.viewDirectorio,backgroundColor:'white'}}>
                <View style={style.viewImage}>
                  <Image
                    source={require('../assets/img/icono-transparencia/iconos_negros/telefono-fijo.png')}
                    style={style.imgTelefono}
                  />
                </View>
                <View style={style.viewSedes}>
                  <Text style={style.textSede}>{item.item.sede}</Text>
                  <Text style={style.textRepresentante}>{item.item.representante}</Text>
                  <Text style={style.textAnexo}>Anexo: {item.item.anexo}</Text>
                </View>
              </View>
             : 
              <View style={{...style.viewDirectorio, backgroundColor:'#ccc'}}>
                <View style={style.viewImage}>
                  <Image
                    source={require('../assets/img/icono-transparencia/iconos_negros/telefono-fijo.png')}
                    style={style.imgTelefono}
                  />
                </View>
                <View style={style.viewSedes}>
                  <Text style={style.textSede}>{item.item.sede}</Text>
                  <Text style={style.textRepresentante}>{item.item.representante}</Text>
                  <Text style={style.textAnexo}>Anexo: {item.item.anexo}</Text>
                </View>
              </View>
            
          }
          keyExtractor={item => item.anexo}
        />
      </SafeAreaView>
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
    marginBottom: 5,
  },
  subTitulo: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '700',
    marginBottom: 30,
  },
  containerBtn: {
    flex:1,
    marginBottom: 100,
  },
  viewDirectorio: {
    width: '100%',
    flexDirection: 'row',
    textAlign: 'center',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewImage: {
    width: '20%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    left: 10,
  },
  imgTelefono: {
    width: '75%',
    height: '70%',
  },
  viewSedes: {
    width: '80%',
    left: 15,
  },
  textSede: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 13,
  },
  textRepresentante: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
  },
  textAnexo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
  },
  /*  textSubSedes:{
    textAlign:'center',
    color:'black',
    fontSize:15,
    marginTop:15,
    marginBottom:15,
    fontWeight:'bold'
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
  }, */
});
