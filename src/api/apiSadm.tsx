import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSadm = () => {

   const [dataSadm, setData] = useState<directorioInterface[]>([]) ;

   const administrativa:Array<directorioInterface> = [
    {
        dependencia:'GERENTE ADMINISTRACION DISTRITAL',
        anexo:'33670',
        nombre:'JESUS GUSTAVO QUINTANA ROJAS'
    },
    {
        dependencia:'SECRETARIA GERENCIA ADMINISTRACION DISTRITAL',
        anexo:'33672',
        nombre:'CARMEN ALIER LOPEZ PANDURO'
    },
    {
        dependencia:'UNIDAD DE ADMINISTRACION Y FINANZAS',
        anexo:'33092',
        nombre:'ROSA ESTHER BRAVO MORALES'
    },
    {
        dependencia:'UNIDAD DE PLANEAMIENTO Y DESARROLLO',
        anexo:'33094',
        nombre:'HERALDO LEON ASTETE'
    },
    {
        dependencia:'COORDINADOR DE CONTABILIDAD',
        anexo:'33096',
        nombre:'VICTOR PACO PARIONA'
    },
    {
        dependencia:'COORDINADOR DE LOGISTICA',
        anexo:'33091',
        nombre:'MIGUEL CESAR CENEPO LOZANO'
    },
    {
        dependencia:'COORDINADORA DE RR. HH.',
        anexo:'33110',
        nombre:'ERICK VALENZUELA SAAVEDRA'
    },
    {
        dependencia:'COORDINADOR DE PRESUPUESTO',
        anexo:'33098',
        nombre:'ERNESTO CHE JUAREZ JUAREZ'
    },
    {
        dependencia:'COORDINADOR DE TESORERIA',
        anexo:'33101',
        nombre:'JAMES PINEDO SANCHEZ'
    },
    {
        dependencia:'COORDINADOR DE SERVICIOS JUDICIALES',
        anexo:'33103',
        nombre:'JULIO CESAR MARIN SILVA'
    },
    {
        dependencia:'ASISTENTES DE RECURSOS HUMANOS',
        anexo:'33111',
        nombre:'NATHALY DEL AGUILA MEZA'
    },
    {
        dependencia:'REGISTRO DE REQUISITORIAS Y CONDENAS',
        anexo:'33106',
        nombre:'MARIZABEL DIAZ ZAMORA'
    },
    {
        dependencia:'ESTUDIO DEL MERCADO',
        anexo:'33087',
        nombre:'SANDRA TRIGOSO CASTAGNE'
    },
    {
        dependencia:'SECRETARIA DE MULTAS',
        anexo:'33108',
        nombre:'FELIPA MAYLLE VENTURA'
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