import { createDrawerNavigator } from "@react-navigation/drawer";
import TransparenciaScreen from '../screens/TransparenciaScreen';
import LinkTransparenciaScreen from "../screens/LinkTransparenciaScreen";
import MenuTransparencia from "../components/MenuTransparencia";
import DirectorioScreen from "../screens/DirectorioScreen";
import GelocalizacionScreen from "../screens/GelocalizacionScreen";
import MapaScreen from "../screens/MapaScreen";
import DirectorioGeneralScreen from '../screens/DirectorioGeneralScreen';
import { directorioInterface } from "../interface/directorioInterface";
import Prueba from "../screens/Prueba";
import OsceScreen from "../screens/OsceScreen";
import OdecmaScreen from "../screens/OdecmaScreen";
import RedesScreen from "../screens/RedesScreen";
import ConvocatoriaScreen from "../screens/ConvocatoriaScreen";


export type RootDrawerTransparenciaParams = {
    Transparencia:undefined,
    LinkTransparencia:{
        link:string
    },
    DirectorioGeneral:undefined,
    Directorio:{
      telefono:string,
      dato:Array<directorioInterface>
    },
    Geolocalizacion:undefined,
    Mapa:{
      lat:number,
      lng:number,
      titulo:string,
      direccion:string,
      img:any
    },
    Osce:{
        link:string
    },
    Odecma:undefined,
    Redes:undefined,
    Convocatoria:{
      link:string
    },
  }

const Drawer = createDrawerNavigator<RootDrawerTransparenciaParams>();

const DrawerTransparencia = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <MenuTransparencia {...props} />}
    screenOptions={{
      unmountOnBlur:true
    }}
    
    backBehavior="history"
    
    >
      <Drawer.Screen name="Transparencia" component={TransparenciaScreen} />
      <Drawer.Screen name="LinkTransparencia" component={LinkTransparenciaScreen} />
      <Drawer.Screen name="DirectorioGeneral" component={DirectorioGeneralScreen} />
      <Drawer.Screen name="Directorio" component={DirectorioScreen} />
      <Drawer.Screen name="Geolocalizacion" component={GelocalizacionScreen} />
      <Drawer.Screen name="Mapa" component={MapaScreen} />
      <Drawer.Screen name="Osce" component={OsceScreen} />
      <Drawer.Screen name="Odecma" component={OdecmaScreen} />
      <Drawer.Screen name="Redes" component={RedesScreen} />
      <Drawer.Screen name="Convocatoria" component={ConvocatoriaScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerTransparencia;