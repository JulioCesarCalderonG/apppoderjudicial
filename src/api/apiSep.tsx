import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSep = () => {

   const [dataSep, setData] = useState<directorioInterface[]>([]) ;

   const establecimiento:Array<directorioInterface> = [
    {
        dependencia:'INPE - VIDEOCONFERENCIAS',
        anexo:'33740'
    },
    {
        dependencia:'SALA DE AUDIENCIA DE LA SALA',
        anexo:'33741'
    },
    {
        dependencia:'SALA DE AUDIENCIA DEL COLEGIADO',
        anexo:'33742'
    },
        ]
        useEffect(() => {
            setData(establecimiento);
          }, [])
  return{
    dataSep
  }
}

export default apiSep