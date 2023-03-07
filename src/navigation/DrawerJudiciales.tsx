import React from 'react';
import {
  createDrawerNavigator

} from '@react-navigation/drawer';
import JudicialesScreen from '../screens/JudicialesScreen';

const Drawer = createDrawerNavigator();

const DrawerJudiciales = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Judicial" component={JudicialesScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerJudiciales;