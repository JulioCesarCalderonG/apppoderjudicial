import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiScampo = () => {

   const [dataScampo, setData] = useState<directorioInterface[]>([]) ;

   const campoverde:Array<directorioInterface> = [
    {
        dependencia:'JUZGADO DE IVEST. PREP. - JUZGADO PAZ LETRADO -  DESPACHO JUEZ',
        anexo:'33712',
        nombre:'INOCENTE PAULINO VALENTINO MACEDONIO'
    },
    {
        dependencia:'JUZGADO MIXTO - DESPACHO JUEZ',
        anexo:'33711',
        nombre:'IVONNE TORRES DIAZ'
    },
    {
        dependencia:'ADMINISTRACION DEL MODULO BASICO DE JUSTICIA',
        anexo:'33710',
        nombre:'JUAN MANUEL IBERICO GALARRETA'
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