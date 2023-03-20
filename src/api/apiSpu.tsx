import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSpu = () => {

   const [dataSpu, setData] = useState<directorioInterface[]>([]) ;

   const purus:Array<directorioInterface> = [
    {
        dependencia:'JUZGADO DE PAZ LETRADO - DESPACHO JUEZ',
        anexo:'33623',
        nombre:'SADITH VELA TANANTA'
    },
    {
        dependencia:'SECRETARIO DEL JUZGADO DE PAZ LETRADO',
        anexo:'33624',
        nombre:'FRANCO GARCIA NAVARRO'
    },
    {
        dependencia:'JUZGADO MIXTO DE PURUS - DESPACHO DE JUEZ',
        anexo:'33621',
        nombre:'ROCIO DEL PILAR MIRANDA GARAY'
    },
    {
        dependencia:'SECRETARIO DEL JUZGADO MIXTO',
        anexo:'33622',
        nombre:'MANUEL JESUS LOPEZ GONZALES'
    },
    {
        dependencia:'AUXILIAR DEL JUZGADO MIXTO',
        anexo:'33620',
        nombre:'FERNANDEZ CANAYO CHARLY KANDY'
    },
        ]
        useEffect(() => {
            setData(purus);
          }, [])
  return{
    dataSpu
  }
}

export default apiSpu