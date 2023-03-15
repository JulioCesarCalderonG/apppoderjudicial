import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSadm = () => {

   const [dataSadm, setData] = useState<directorioInterface[]>([]) ;

   const administrativa:Array<directorioInterface> = [
    {
        dependencia:'GERENTE ADMINISTRACION DISTRITAL',
        anexo:'33670'
    },
    {
        dependencia:'SECRETARIA GERENCIA ADMINISTRACION DISTRITAL',
        anexo:'33672'
    },
    {
        dependencia:'UNIDAD DE ADMINISTRACION Y FINANZAS',
        anexo:'33092'
    },
    {
        dependencia:'UNIDAD DE PLANEAMIENTO Y DESARROLLO',
        anexo:'33094'
    },
    {
        dependencia:'COORDINADOR DE CONTABILIDAD',
        anexo:'33096'
    },
    {
        dependencia:'COORDINADOR DE LOGISTICA',
        anexo:'33091'
    },
    {
        dependencia:'COORDINADORA DE RR. HH.',
        anexo:'33110'
    },
    {
        dependencia:'COORDINADOR DE PRESUPUESTO',
        anexo:'33098'
    },
    {
        dependencia:'COORDINADOR DE TESORERIA',
        anexo:'33101'
    },
    {
        dependencia:'COORDINADOR DE SERVICIOS JUDICIALES',
        anexo:'33103'
    },
    {
        dependencia:'ASISTENTES DE RECURSOS HUMANOS',
        anexo:'33111'
    },
    {
        dependencia:'REGISTRO DE REQUISITORIAS Y CONDENAS',
        anexo:'33106'
    },
    {
        dependencia:'ESTUDIO DEL MERCADO',
        anexo:'33087'
    },
    {
        dependencia:'SECRETARIA DE MULTAS',
        anexo:'33108'
    },
        ]
        useEffect(() => {
          setData(administrativa);
        }, [])
        
  return{
    dataSadm
  }
}

export default apiSadm