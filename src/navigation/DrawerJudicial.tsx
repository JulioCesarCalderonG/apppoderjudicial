import { createDrawerNavigator } from "@react-navigation/drawer";
import JudicialesScreen from "../screens/JudicialesScreen";
import LinkJudicialesScreen from "../screens/LinkJudicialesScreen";
import MenuJudiciales from "../components/MenuJudiciales";
import CejScreen from "../screens/CejScreen";
import MauScreen from "../screens/MauScreen";
import MpScreen from "../screens/MpScreen";
import EccdjScreen from "../screens/EccdjScreen";
import Prueba from '../screens/Prueba';
import PdfScreen from "../screens/PdfScreen";
import PenalesScreen from "../screens/PenalesScreen";


export type RootDrawerParams = {
    Judiciales:undefined,
    LinkJudiciales:{
        link:string
    },
    CEJ:undefined,
    MAU:undefined,
    MP:undefined,
    ECCD:undefined,
    Prueba:undefined,
    PDF:undefined,
    Penales:{
      link:string
  },
}

const Drawer = createDrawerNavigator<RootDrawerParams>();

const DrawerJudicial = () => {
  return (
    <Drawer.Navigator
    
    drawerContent={(props) => <MenuJudiciales  {...props} />}
    screenOptions={{
      unmountOnBlur:true
    }}
    
    backBehavior="history"
    >
      <Drawer.Screen name="Judiciales"  component={JudicialesScreen} />
      <Drawer.Screen name="LinkJudiciales" component={LinkJudicialesScreen} />
      <Drawer.Screen name="CEJ"  component={CejScreen} />
      
      <Drawer.Screen name="MAU"  component={MauScreen} />
      <Drawer.Screen name="MP"  component={MpScreen} />
      <Drawer.Screen name="ECCD"  component={EccdjScreen} />
      <Drawer.Screen name="Prueba"  component={Prueba} />
      <Drawer.Screen name="PDF"  component={PdfScreen} />
      <Drawer.Screen name="Penales"  component={PenalesScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerJudicial;