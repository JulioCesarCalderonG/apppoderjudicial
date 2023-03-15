import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiScomi = () => {

   const [dataScomi, setData] = useState<directorioInterface[]>([]) ;

   const comisaria:Array<directorioInterface> = [
    {
        dependencia:'JUZGADO DE PAZ LETRADO - DESPACHO JUEZ',
        anexo:'33651'
    },
    {
        dependencia:'MESA DE PARTES',
        anexo:'33650'
    },
    {
        dependencia:'ASISTENTE JUDICIAL',
        anexo:'33652'
    },
        ]
        useEffect(() => {
            setData(comisaria);
          }, [])
  return{
    dataScomi
  }
}

export default apiScomi