import React,{useState, useEffect} from 'react'
import { DirectorioGeneral } from '../interface/directorioGeneral';

export const apiGeneral = () => {
 const [dataGe, setDataGe] = useState<DirectorioGeneral[]>() ;

 const general:Array<DirectorioGeneral> = [
    {
        sede:'PRESIDENCIA',
        representante:'Presidente',
        anexo:'3300'
    },
    {
        sede:'PRESIDENCIA',
        representante:'Secretaria de Presidencia',
        anexo:'3301'
    },
    {
        sede:'PRESIDENCIA',
        representante:'Coordinadora de de Presidencia',
        anexo:'3302'
    },
    {
        sede:'PRESIDENCIA',
        representante:'Coordinadora de de Presidencia',
        anexo:'3303'
    },
    {
        sede:'PRESIDENCIA',
        representante:'Coordinadora de de Presidencia',
        anexo:'3304'
    },
    {
        sede:'PRESIDENCIA',
        representante:'Coordinadora de de Presidencia',
        anexo:'3305'
    },
    {
        sede:'PRESIDENCIA',
        representante:'Coordinadora de de Presidencia',
        anexo:'3306'
    },
    {
        sede:'PRESIDENCIA',
        representante:'Coordinadora de de Presidencia',
        anexo:'3307'
    },
    {
        sede:'PRESIDENCIA',
        representante:'Coordinadora de de Presidencia',
        anexo:'3308'
    }
 ]

 useEffect(() => {
    setDataGe(general)
  }, [])
  return {
    dataGe
  }
}
