import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSpi = () => {

   const [dataSpi, setData] = useState<directorioInterface[]>([]) ;

   const puertoinca:Array<directorioInterface> = [
    {
        dependencia:'MESA DE PARTES',
        anexo:'33733'
    },
    {
        dependencia:'JUZGADO DE PAZ LETRADO - DESPACHO JUEZ',
        anexo:'33721'
    },
    {
        dependencia:'SECRETARIA DE PAZ LETRADO',
        anexo:'33732'
    },
        ]
        useEffect(() => {
            setData(puertoinca);
          }, [])
  return{
    dataSpi
  }
}

export default apiSpi