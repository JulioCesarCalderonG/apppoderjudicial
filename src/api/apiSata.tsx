import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSata = () => {

   const [dataSata, setData] = useState<directorioInterface[]>([]) ;

   const atalaya:Array<directorioInterface> = [
    {
        dependencia:'MESA DE PARTES',
        anexo:'33610'
    },
    {
        dependencia:'JUZGADO MIXTO - DESPACHO JUEZ',
        anexo:'33611'
    },
    {
        dependencia:'POOL DE ASISTENTES - PAZ LETRADO',
        anexo:'33612'
    },
    {
        dependencia:'JUZ. DE INV. PREP./ JUZ. PAZ LETRADO   - DESPACHO JUEZ',
        anexo:'33613'
    },
    {
        dependencia:'POOL DE ASISTENTES - JUZGADO MIXTO',
        anexo:'33614'
    },
        ]
        useEffect(() => {
            setData(atalaya);
          }, [])
  return{
    dataSata
  }
}

export default apiSata