import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSchero = () => {

   const [dataSchero, setData] = useState<directorioInterface[]>([]) ;

   const cheroke:Array<directorioInterface> = [
    {
        dependencia:'1er. JUZGADO DE FAMILIA-DESPACHO JUEZ',
        anexo:'33762'
    },
    {
        dependencia:'2do. JUZGADO DE FAMILIA-DESPACHO JUEZ',
        anexo:'33761'
    },
    {
        dependencia:'EQUIPO MULTIDICIPLINARIO',
        anexo:'33114'
    },
    {
        dependencia:'MESA PARTES DE JUZGADOS DE FAMILIA',
        anexo:'33760'
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