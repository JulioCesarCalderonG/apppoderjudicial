import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSpa = () => {

   const [dataSpa, setData] = useState<directorioInterface[]>([]) ;

   const padreabad:Array<directorioInterface> = [
    {
        dependencia:'MESA DE PARTE',
        anexo:'33601'
    },
    {
        dependencia:'JUZGADO JUP Y MIXTO - DESPACHO JUEZ',
        anexo:'33602'
    },
    {
        dependencia:'JUZGADO MIXTO  Y JUP',
        anexo:'33603'
    },
    {
        dependencia:'JUZGADO JIP Y PAZ LETRADO - DESPACHO JUEZ',
        anexo:'33604'
    },
    {
        dependencia:'JIP Y PAZ LETRADO',
        anexo:'33605'
    },
    {
        dependencia:'AREA DE INFORMATICA',
        anexo:'33606'
    },
        ]
        useEffect(() => {
            setData(padreabad);
          }, [])
  return{
    dataSpa
  }
}

export default apiSpa