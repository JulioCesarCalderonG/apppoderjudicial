import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSman = () => {

   const [dataSman, setData] = useState<directorioInterface[]>([]) ;

   const manantay:Array<directorioInterface> = [
    {
        dependencia:'MESA DE PARTES',
        anexo:'33660',
        nombre:'GUIDO JACINTO BERAUN OSORIO'
    },
    {
        dependencia:'JUZGADO DE PAZ LETRADO - DESPACHO JUEZ',
        anexo:'33662',
        nombre:'DERLINA VASQUEZ RUIZ'
    },
    {
        dependencia:'POOL DE ASISTENTES',
        anexo:'33663',
        nombre:'VIRNA LIZET MORENO CHU'
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