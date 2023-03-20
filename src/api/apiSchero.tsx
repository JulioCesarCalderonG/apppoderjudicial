import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSchero = () => {

   const [dataSchero, setData] = useState<directorioInterface[]>([]) ;

   const cheroke:Array<directorioInterface> = [
    {
        dependencia:'1er. JUZGADO DE FAMILIA-DESPACHO JUEZ',
        anexo:'33762',
        nombre:'MILTON SOSA CUTIMBO'
    },
    {
        dependencia:'2do. JUZGADO DE FAMILIA-DESPACHO JUEZ',
        anexo:'33761',
        nombre:'DELINA SALAZAR ROJAS'
    },
    {
        dependencia:'EQUIPO MULTIDICIPLINARIO',
        anexo:'33114',
        nombre:'DORIS SERRANO CASTILLO'
    },
    {
        dependencia:'MESA PARTES DE JUZGADOS DE FAMILIA',
        anexo:'33760',
        nombre:'PAQUITA SIFUENTES MEDINA'
    },
        ]
        useEffect(() => {
            setData(cheroke);
          }, [])
  return{
    dataSchero
  }
}

export default apiSchero