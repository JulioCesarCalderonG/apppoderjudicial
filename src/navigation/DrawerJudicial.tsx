import { createDrawerNavigator } from "@react-navigation/drawer";
import JudicialesScreen from "../screens/JudicialesScreen";
import LinkJudicialesScreen from "../screens/LinkJudicialesScreen";
import MenuJudiciales from "../components/MenuJudiciales";


export type RootDrawerParams = {
    Judiciales:undefined,
    LinkJudiciales:{
        link:string
    }
  }

const Drawer = createDrawerNavigator<RootDrawerParams>();

const DrawerJudicial = () => {
  return (
    <Drawer.Navigator
    
    drawerContent={(props) => <MenuJudiciales  {...props} />}
    screenOptions={{
      drawerLabelStyle: { marginLeft: -25 },
      drawerActiveBackgroundColor: '#05923d',
      drawerActiveTintColor: 'black',
      unmountOnBlur:true,
      freezeOnBlur:true
    }}
    defaultStatus="closed"
    initialRouteName="Judiciales"
    >
      <Drawer.Screen name="Judiciales"  component={JudicialesScreen} />
      <Drawer.Screen name="LinkJudiciales" component={LinkJudicialesScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerJudicial;