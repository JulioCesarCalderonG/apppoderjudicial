import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSpu = () => {

   const [dataSpu, setData] = useState<directorioInterface[]>([]) ;

   const purus:Array<directorioInterface> = [
    {
        dependencia:'JUZGADO DE PAZ LETRADO - DESPACHO JUEZ',
        anexo:'33623'
    },
    {
        dependencia:'SECRETARIO DEL JUZGADO DE PAZ LETRADO',
        anexo:'33624'
    },
    {
        dependencia:'JUZGADO MIXTO DE PURUS - DESPACHO DE JUEZ',
        anexo:'33621'
    },
    {
        dependencia:'SECRETARIO DEL JUZGADO MIXTO',
        anexo:'33622'
    },
    {
        dependencia:'AUXILIAR DEL JUZGADO MIXTO',
        anexo:'33620'
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