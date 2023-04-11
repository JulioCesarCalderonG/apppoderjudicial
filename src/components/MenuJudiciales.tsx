import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer';
import {View, StyleSheet, Image} from 'react-native';
import {Avatar, Title, Caption, Paragraph} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';
import DrawerJudiciales from './DrawerJudiciales';

const MenuJudiciales = (props: DrawerContentComponentProps) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                alignItems: 'center',
              }}>
              <Avatar.Image
                source={require('../assets/img/pj.jpg')}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>BIENVENIDO</Title>
              </View>
            </View>

            <View style={{marginTop: 15}}>
              <View>
                <Paragraph style={{fontWeight: '500', color: 'white'}}>
                  PODER JUDICIAL DEL PERU
                </Paragraph>
              </View>
              <View>
                <Caption style={{fontWeight: '500', color: 'white'}}>
                  Corte Superior de Justicia de Ucayali
                </Caption>
              </View>
            </View>
          </View>

          <View style={styles.drawerSection}>
            <DrawerJudiciales
              label="Inicio"
              img={require('../assets/img/iconos-negro/home.png')}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerJudiciales
              label="Menu Principal"
              img={require('../assets/img/iconos-negro/menu1.png')}
              onPress={() => {
                props.navigation.navigate('Judiciales');
              }}
            />
            <DrawerJudiciales
              label="Consulta de expedientes judiciales"
              img={require('../assets/img/iconos-negro/seguimiento.png')}
              onPress={() => {
                props.navigation.navigate('CEJ');
              }}
            />
            <DrawerJudiciales
              label="Modulo de atencion al usuario - MAU"
              img={require('../assets/img/iconos-negro/consultante.png')}
              onPress={() => {
                props.navigation.navigate('MAU');
              }}
            />
            <DrawerJudiciales
              label="Mesa de partes virtual"
              img={require('../assets/img/iconos-negro/correo.png')}
              onPress={() => {
                props.navigation.navigate('MP');
              }}
            />
            <DrawerJudiciales
              label="Certificado electrónico de antecedentes penales"
              img={require('../assets/img/iconos-negro/homonimia.png')}
              onPress={() => {
                props.navigation.navigate('ECCD');
              }}
            />
            <DrawerJudiciales
              label="Aranceles judiciales"
              img={require('../assets/img/iconos-negro/impuesto.png')}
              onPress={() => {
                props.navigation.navigate('PDF');
              }}
            />
            <DrawerJudiciales
              label="Demanda de alimentos"
              img={require('../assets/img/iconos-negro/npl.png')}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://dalimentos.pj.gob.pe/cortes/ucayali/links_demanda',
                });
              }}
            />
            <DrawerJudiciales
              label="Archivo general de expedientes"
              img={require('../assets/img/iconos-negro/carpeta.png')}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://svsarchivisticos.pj.gob.pe/archi/#/',
                });
              }}
            />
            <DrawerJudiciales
              label="Conoce a tu juez - Programa tu cita"
              img={require('../assets/img/iconos-negro/subasta.png')}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://svsarchivisticos.pj.gob.pe/archi/#/',
                });
              }}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default MenuJudiciales;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    backgroundColor: '#960b28',
    height: 150,
    marginTop: -10,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: 'white',
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  Icon: {
    marginRight: -20,
    width: 25,
    height: 25,
  },
});
