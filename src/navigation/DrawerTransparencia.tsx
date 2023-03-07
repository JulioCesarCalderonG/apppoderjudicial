import React from 'react';
import {
  createDrawerNavigator

} from '@react-navigation/drawer';
import TransparenciaScreen from '../screens/TransparenciaScreen';

const Drawer = createDrawerNavigator();

const DrawerTransparencia = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Transparencia" component={TransparenciaScreen} />
    </Drawer.Navigator>
  );
}


export default DrawerTransparencia;