import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSman = () => {

   const [dataSman, setData] = useState<directorioInterface[]>([]) ;

   const manantay:Array<directorioInterface> = [
    {
        dependencia:'MESA DE PARTES',
        anexo:'33660'
    },
    {
        dependencia:'JUZGADO DE PAZ LETRADO - DESPACHO JUEZ',
        anexo:'33662'
    },
    {
        dependencia:'POOL DE ASISTENTES',
        anexo:'33663'
    },
        ];

        useEffect(() => {
            setData(manantay);
          }, [])

  return{
    dataSman
  }
}

export default apiSman