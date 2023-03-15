import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSconta = () => {

   const [dataSconta, setData] = useState<directorioInterface[]>([]) ;

   const contamana:Array<directorioInterface> = [
    {
        dependencia:'AREA DE INFORMATICA',
        anexo:'30681'
    },
    {
        dependencia:'JUZGADO DE PAZ LETRADO - DESPACHO JUEZ',
        anexo:'30683'
    },
    {
        dependencia:'SECRETARIO DEL JUZGADO DE PAZ LETRADO',
        anexo:'30682'
    },
    {
        dependencia:'JUZGADO MIXTO - DESPACHO DE JUEZ',
        anexo:'30680'
    },
    {
        dependencia:'SECRETARIA DEL JUZGADO MIXTO',
        anexo:'30684'
    },
        ]
        useEffect(() => {
            setData(contamana);
          }, [])
  return{
    dataSconta
  }
}

export default apiSconta