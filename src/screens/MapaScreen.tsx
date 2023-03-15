import React, {useEffect} from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView,{Marker} from 'react-native-maps'
import { RootDrawerTransparenciaParams } from '../navigation/DrawerTransparencia';
import { drawerStyle } from '../style/DrawerMenuStyle';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props
  extends DrawerScreenProps<
  RootDrawerTransparenciaParams,
    'Mapa'
  > {}

const MapaScreen = ({navigation}:Props) => {
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
          <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
            CSJ Ucayali
          </Text>

          <TouchableOpacity
          style={{ marginLeft:190, borderRadius:2, width:30, alignItems:'center'}}
          onPress={()=>{navigation.navigate('Geolocalizacion')}}
        >
          <Icon
            name='arrow-back-sharp'
            size={25}
            style={{color:'white'}}
          />
        </TouchableOpacity>
        </View>
      ),
      drawerPosition: 'left',
    });
  }, []);
  return (
    <View style={{flex:1}}>
        <MapView
        style={{flex:1}}
          initialRegion={{
            latitude: -8.389762,
            longitude: -74.552193,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,

          }}
        >
          <Marker
            coordinate={{
              latitude: -8.389762,
              longitude: -74.552193,
            }}
            title='Esto es un ejemplo'
            description='Esto es un ejemplo'
        />
        </MapView>
        
    </View>
  )
}

export default MapaScreen