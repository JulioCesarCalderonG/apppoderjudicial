import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerGeneral from './src/navigation/DrawerGeneral';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerGeneral/>
    </NavigationContainer>
  );
};

export default App;

