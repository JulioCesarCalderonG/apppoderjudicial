import { createDrawerNavigator } from "@react-navigation/drawer";
import TransparenciaScreen from '../screens/TransparenciaScreen';
import LinkTransparenciaScreen from "../screens/LinkTransparenciaScreen";
import MenuTransparencia from "../components/MenuTransparencia";


export type RootDrawerTransparenciaParams = {
    Transparencia:undefined,
    LinkTransparencia:{
        link:string
    }
  }

const Drawer = createDrawerNavigator<RootDrawerTransparenciaParams>();

const DrawerTransparencia = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <MenuTransparencia {...props} />}
    screenOptions={{
      drawerLabelStyle: { marginLeft: -25 },
      drawerActiveBackgroundColor: '#05923d',
      drawerActiveTintColor: 'black',

    }}
    
    initialRouteName="Transparencia"
    >
      <Drawer.Screen name="Transparencia" component={TransparenciaScreen} />
      <Drawer.Screen name="LinkTransparencia" component={LinkTransparenciaScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerTransparencia;