import React,{useState, useEffect} from 'react'
import { DirectorioGeneral } from '../interface/directorioGeneral';

export const apiGeneral = () => {
 const [dataGe, setDataGe] = useState<DirectorioGeneral[]>() ;

 const general:Array<DirectorioGeneral> = [
    {
        sede:'SEDE CENTRAL',
        representante:'Presidencia - Mesa de Partes',
        anexo:'33003'
    },
    {
        sede:'SEDE CENTRAL',
        representante:'ODECMA - Mesa de Partes',
        anexo:'33030'
    },
    {
        sede:'SEDE CENTRAL',
        representante:'Presidencia - Mesa de Partes NCPP',
        anexo:'33070'
    },
    {
        sede:'SEDE SAENZ PEÑA',
        representante:'Mesa de Partes',
        anexo:'33177'
    },
    {
        sede:'SEDE JUZGADO DE PAZ LETRADO',
        representante:'Mesa de Partes',
        anexo:'33650'
    },
    {
        sede:'SEDE YARINACOCHA',
        representante:'Mesa de Partes',
        anexo:'33750'
    },
    {
        sede:'SEDE DE FAMILIA',
        representante:'Mesa de Partes',
        anexo:'33760'
    },
    {
        sede:'SEDE ARCHIVO GENERAL DE EXPEDIENTES',
        representante:'Mesa de Partes',
        anexo:'33682'
    },
    {
        sede:'SEDE MANCO CAPAC',
        representante:'Mesa de Partes NLPT ',
        anexo:'33526'
    },
    {
        sede:'SEDE MANCO CAPAC',
        representante:'Mesa de Partes Tradicional',
        anexo:'33523'
    },
    {
        sede:'SEDE PADRE ABAD',
        representante:'Mesa de Partes',
        anexo:'33601'
    },
    {
        sede:'SEDE ATALAYA',
        representante:'Mesa de Partes',
        anexo:'33610'
    },{
        sede:'SEDE MANANTAY',
        representante:'Juzgado de Paz Letrado - Mesa de Partes',
        anexo:'33662'
    },
    {
        sede:'SEDE PUERTO INCA',
        representante:'Juzgado de Paz Letrado - Mesa de Partes',
        anexo:'33721'
    }
 ]
 
 useEffect(() => {
    setDataGe(general)
  }, [])
  return {
    dataGe
  }
}
