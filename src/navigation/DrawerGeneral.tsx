import { createDrawerNavigator } from "@react-navigation/drawer";
import MenuDrawer from "../components/MenuJudiciales";
import { Home } from "../screens/HomeScreen";
import StackTransparencia from "./StackTransparencia";
import StackJudiciales from "./StackJudiciales";


export type RootDrawerParams = {
    Home: undefined,
    StackJudiciales:undefined,
    StackTransparencia:undefined
  }

const Drawer = createDrawerNavigator<RootDrawerParams>();

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
      {/* <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="StackJudiciales" options={{
        headerShown:false
      }} component={StackJudiciales} />
      <Drawer.Screen name="StackTransparencia" options={{
        headerShown:false
      }} component={StackTransparencia} /> */}
    </Drawer.Navigator>
  );
}

export default DrawerGeneral;