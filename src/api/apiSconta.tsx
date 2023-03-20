import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSconta = () => {

   const [dataSconta, setData] = useState<directorioInterface[]>([]) ;

   const contamana:Array<directorioInterface> = [
    {
        dependencia:'AREA DE INFORMATICA',
        anexo:'30681',
        nombre:'TULIO CESAR OJEDA HUANCAS'
    },
    {
        dependencia:'JUZGADO DE PAZ LETRADO - DESPACHO JUEZ',
        anexo:'30683',
        nombre:'WAGNER KARL VILLACREZ MORI'
    },
    {
        dependencia:'SECRETARIO DEL JUZGADO DE PAZ LETRADO',
        anexo:'30682',
        nombre:'VICTOR YOSIMAR HERRERA MELENDEZ'
    },
    {
        dependencia:'JUZGADO MIXTO - DESPACHO DE JUEZ',
        anexo:'30680',
        nombre:'CLAVELITO CUHELLO GUERRA'
    },
    {
        dependencia:'SECRETARIA DEL JUZGADO MIXTO',
        anexo:'30684',
        nombre:'NOEMI FULCA ARAUJO'
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