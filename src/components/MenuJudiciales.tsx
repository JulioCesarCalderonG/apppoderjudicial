import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer';
import {View, StyleSheet, Image} from 'react-native';
import {Avatar, Title, Caption, Paragraph} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';

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
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-sharp" color={color} size={size} style={styles.Icon}/>
              )}
              label="Inicio"
              labelStyle={{
                fontSize:12
              }}
              style={{
                width:300,
              }}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="grid-sharp" color={color} size={size} style={styles.Icon}/>
              )}
              label="Menu Principal"
              labelStyle={{
                fontSize:12
              }}
              style={{
                width:300,
              }}
              onPress={() => {
                props.navigation.navigate('Judiciales');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                source={require('../assets/img/icono-transparencia/iconos_negros/consultante.png')}
                  style={styles.Icon}
                />
              )}
              label="Consulta y orientacion virutal"
              labelStyle={{
                fontSize:12
              }}
              style={{
                width:300,
              }}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://serjus.pj.gob.pe/consultayorientacionjuridica/Ucayali',
                });
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                source={require('../assets/img/icono-transparencia/iconos_negros/calendario.png')}
                  style={styles.Icon}
                />
              )}
              label="Solicita tu cita presencial"
              labelStyle={{
                fontSize:12
              }}
              style={{
                width:300,
              }}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://serjus.pj.gob.pe/consultayorientacionjuridicapresencial/Ucayali',
                });
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                source={require('../assets/img/icono-transparencia/iconos_negros/solicitud.png')}
                  style={styles.Icon}
                />
              )}
              label="Registro de solicitudes judiciales"
              labelStyle={{
                fontSize:12
              }}
              style={{
                width:300,
              }}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://serjus.pj.gob.pe/consultajudicialviaweb/Ucayali',
                });
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  source={require('../assets/img/iconos-negro/seguimiento.png')}
                  style={styles.Icon}
                />
              )}
              label="Seguimiento de solicitudes judiciales"
              labelStyle={{
                fontSize:12
              }}
              style={{
                width:300,
              }}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://serjus.pj.gob.pe/seguimientoconsultajudicialviaweb/Ucayali',
                });
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  source={require('../assets/img/icono-transparencia/iconos_negros/calificacion.png')}
                  style={styles.Icon}
                />
              )}
              label="Calificacion de atencion al usuario"
              labelStyle={{
                fontSize:12
              }}
              style={{
                width:300,
              }}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://serjus.pj.gob.pe/calificacionatencionalusuario/Ucayali',
                });
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  source={require('../assets/img/iconos-negro/contrato.png')}
                  style={styles.Icon}
                />
              )}
              label="Emision de Homonimia"
              labelStyle={{
                fontSize:12
              }}
              style={{
                width:300,
              }}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://serjus.pj.gob.pe/certificadohomonimia/Ucayali',
                });
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
               <Image
                  source={require('../assets/img/iconos-negro/seguimiento.png')}
                  style={styles.Icon}
                />
              )}
              label="Seguimiento de Homonimia"
              labelStyle={{
                fontSize:12
              }}
              style={{
                width:300,
              }}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://serjus.pj.gob.pe/seguimientocertificadohomonimia/Ucayali',
                });
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
               <Image
                  source={require('../assets/img/iconos-negro/contrato.png')}
                  style={styles.Icon}
                />
              )}
              label="Emision de Deudores Alimentarios"
              labelStyle={{
                fontSize:12
              }}
              style={{
                width:300,
              }}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://serjus.pj.gob.pe/certificadodam/Ucayali',
                });
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
               <Image
                  source={require('../assets/img/iconos-negro/seguimiento.png')}
                  style={styles.Icon}
                />
              )}
              label="Seguimiento de Deudores Alimentarios"
              labelStyle={{
                fontSize:12
              }}
              style={{
                width:300,
              }}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://serjus.pj.gob.pe/seguimientocertificadodam/Ucayali',
                });
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
               <Image
                  source={require('../assets/img/iconos-negro/impuesto.png')}
                  style={styles.Icon}
                />
              )}
              label="Habilitacion de Aranceles"
              labelStyle={{
                fontSize:13
              }}
              style={{
                width:300,
              }}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://serjus.pj.gob.pe/certificadohaj/Ucayali',
                });
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
               <Image
                  source={require('../assets/img/iconos-negro/seguimiento.png')}
                  style={styles.Icon}
                />
              )}
              label="Seguimiento de Aranceles"
              labelStyle={{
                fontSize:13
              }}
              style={{
                width:300,
              }}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://serjus.pj.gob.pe/seguimientocertificadohaj/Ucayali',
                });
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
               <Image
                  source={require('../assets/img/iconos-negro/courthouse.png')}
                  style={styles.Icon}
                />
              )}
              label="Emision de Antecendentes - E"
              labelStyle={{
                fontSize:12
              }}
              style={{
                width:300,
              }}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://serjus.pj.gob.pe/antecedentespe/Ucayali',
                });
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
               <Image
                  source={require('../assets/img/iconos-negro/seguimiento.png')}
                  style={styles.Icon}
                />
              )}
              label="Seguimiento de Antecendentes - E"
              labelStyle={{
                fontSize:12
              }}
              style={{
                width:310,
              }}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://serjus.pj.gob.pe/seguimientoantecedentespe/Ucayali',
                });
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
               <Image
                  source={require('../assets/img/iconos-negro/courthouse.png')}
                  style={styles.Icon}
                />
              )}
              label="Emision de Antecendentes - N"
              labelStyle={{
                fontSize:12
              }}
              style={{
                width:310,
              }}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://cape.pj.gob.pe/cape/',
                });
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
               <Image
                  source={require('../assets/img/iconos-negro/npl.png')}
                  style={styles.Icon}
                />
              )}
              label="Consulta de deudor Alimentario"
              labelStyle={{
                fontSize:12
              }}
              style={{
                width:310,
              }}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://casillas.pj.gob.pe/redam/#/',
                });
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
               <Image
                  source={require('../assets/img/iconos-negro/carpeta.png')}
                  style={styles.Icon}
                />
              )}
              label="Verificacion de Certificados"
              labelStyle={{
                fontSize:12
              }}
              style={{
                width:310,
              }}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales',{link:'https://casillas.pj.gob.pe/cap/'});
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
               <Image
                  source={require('../assets/img/iconos-negro/celda.png')}
                  style={styles.Icon}
                />
              )}
              label="Demanda de Alimentos"
              labelStyle={{
                fontSize:12
              }}
              style={{
                width:310,
              }}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://dalimentos.pj.gob.pe/cortes/ucayali/links_demanda',
                });
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
               <Image
                  source={require('../assets/img/iconos-negro/seguimiento.png')}
                  style={styles.Icon}
                />
              )}
              label="Consulta de Expedientes J.Supremo"
              labelStyle={{
                fontSize:12
              }}
              style={{
                width:310,
              }}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://apps.pj.gob.pe/cejSupremo/',
                });
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
               <Image
                  source={require('../assets/img/iconos-negro/seguimiento.png')}
                  style={styles.Icon}
                />
              )}
              label="Consulta de Expedientes J.Superior"
              labelStyle={{
                fontSize:12
              }}
              style={{
                width:310,
              }}
              onPress={() => {
                props.navigation.navigate('LinkJudiciales', {
                  link: 'https://cej.pj.gob.pe/cej/forms/busquedaform.html',
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
    flex: 1
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
  Icon:{
    marginRight:-20,
    width:25,
    height:25
  }
});
