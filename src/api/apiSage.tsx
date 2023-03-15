import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSage = () => {

   const [dataSage, setData] = useState<directorioInterface[]>([]) ;

   const archivo:Array<directorioInterface> = [
    {
        dependencia:'ARCHIVO GENERAL DE EXPEDIENTES',
        anexo:'33680'
    },
    {
        dependencia:'MESA DE PARTE',
        anexo:'33682'
    },
    {
        dependencia:'PERSONAL DE SEGURIDAD',
        anexo:'33681'
    },
        ]
        useEffect(() => {
            setData(archivo);
          }, [])
  return{
    dataSage
  }
}

export default apiSage