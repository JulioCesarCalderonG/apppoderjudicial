import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerGeneral from './src/navigation/DrawerGeneral';
import StackGeneral from './src/navigation/StackGeneral';

const App = () => {
  return (
    <NavigationContainer>
      {/* <DrawerGeneral/> */}
      <StackGeneral/>
    </NavigationContainer>
  );
};

export default App;

