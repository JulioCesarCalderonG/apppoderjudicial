import { createDrawerNavigator } from "@react-navigation/drawer";
import MenuDrawer from "../components/MenuDrawer";
import { Home } from "../screens/HomeScreen";
import StackTransparencia from "./DrawerTransparencia";
import StackJudiciales from "./StackJudiciales";


export type RootStackParams = {
    Home: undefined,
    StackJudiciales:undefined,
    StackTransparencia:undefined
  }

const Drawer = createDrawerNavigator<RootStackParams>();

const DrawerGeneral = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <MenuDrawer {...props} />}
    screenOptions={{
      drawerLabelStyle: { marginLeft: -25 },
      drawerActiveBackgroundColor: '#05923d',
      drawerActiveTintColor: 'black',
    }}
    initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="StackJudiciales" component={StackJudiciales} />
      <Drawer.Screen name="StackTransparencia" component={StackTransparencia} />
    </Drawer.Navigator>
  );
}

export default DrawerGeneral;