import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiScampo = () => {

   const [dataScampo, setData] = useState<directorioInterface[]>([]) ;

   const campoverde:Array<directorioInterface> = [
    {
        dependencia:'JUZGADO DE IVEST. PREP. - JUZGADO PAZ LETRADO -  DESPACHO JUEZ',
        anexo:'33712'
    },
    {
        dependencia:'JUZGADO MIXTO - DESPACHO JUEZ',
        anexo:'33711'
    },
    {
        dependencia:'ADMINISTRACION DEL MODULO BASICO DE JUSTICIA',
        anexo:'33710'
    },
        ]
        useEffect(() => {
            setData(campoverde);
          }, [])
  return{
    dataScampo
  }
}

export default apiScampo