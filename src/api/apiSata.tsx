import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSata = () => {

   const [dataSata, setData] = useState<directorioInterface[]>([]) ;

   const atalaya:Array<directorioInterface> = [
    {
        dependencia:'MESA DE PARTES',
        anexo:'33610',
        nombre:'LLORENS URRUNAGA NOVOA'
    },
    {
        dependencia:'JUZGADO MIXTO - DESPACHO JUEZ',
        anexo:'33611',
        nombre:'FELIPE DAVID PALACIOS SANTOS'
    },
    {
        dependencia:'POOL DE ASISTENTES - PAZ LETRADO',
        anexo:'33612',
        nombre:'JHON CAPCHA MARTINEZ'
    },
    {
        dependencia:'JUZ. DE INV. PREP./ JUZ. PAZ LETRADO   - DESPACHO JUEZ',
        anexo:'33613',
        nombre:'BRYAN APAGUEÑO REATEGUI'
    },
    {
        dependencia:'POOL DE ASISTENTES - JUZGADO MIXTO',
        anexo:'33614',
        nombre:'SEGUNDO VALDIVIESO BARDALES'
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