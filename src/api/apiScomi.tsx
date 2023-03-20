import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiScomi = () => {

   const [dataScomi, setData] = useState<directorioInterface[]>([]) ;

   const comisaria:Array<directorioInterface> = [
    {
        dependencia:'JUZGADO DE PAZ LETRADO - DESPACHO JUEZ',
        anexo:'33651',
        nombre:'DIANA MALPARTIDA LASTRA'
    },
    {
        dependencia:'MESA DE PARTES',
        anexo:'33650',
        nombre:'SELVA DAVILA CARDENAS'
    },
    {
        dependencia:'ASISTENTE JUDICIAL',
        anexo:'33652',
        nombre:'MITZY RICOPA SHERADER'
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