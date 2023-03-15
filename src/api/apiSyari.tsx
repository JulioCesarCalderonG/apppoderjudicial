import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSyari = () => {

   const [dataSyari, setData] = useState<directorioInterface[]>([]) ;

   const yarinacocha:Array<directorioInterface> = [
    {
        dependencia:'JUZGADO MIXTO - DESPACHO JUEZ',
        anexo:'33751'
    },
    {
        dependencia:'JUZGADO PAZ LETRADO - DESPACHO JUEZ',
        anexo:'33752'
    },
    {
        dependencia:'MESA PARTES',
        anexo:'33750'
    },
        ]
        useEffect(() => {
            setData(yarinacocha);
          }, [])
  return{
    dataSyari
  }
}

export default apiSyari