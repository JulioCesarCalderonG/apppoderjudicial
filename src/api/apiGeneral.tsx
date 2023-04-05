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
        sede:'SEDE ADMINISTRACION',
        representante:'Secretaria Gerencia Administracion Distrital',
        anexo:'33672'
    },
    {
        sede:'ODECMA',
        representante:'Mesa de Partes',
        anexo:'33030'
    },
    {
        sede:'NUEVO CÓDIGO PROCESAL PENAL - NCPP',
        representante:'Mesa de Partes',
        anexo:'33070'
    },
    {
        sede:'SEDE SAENZ PEÑA',
        representante:'Mesa de Partes',
        anexo:'33177'
    },
    {
        sede:'SEDE JUZGADO DE PAZ LETRADO PENAL',
        representante:'Mesa de Partes',
        anexo:'33650'
    },
    {
        sede:'SEDE ARCHIVO GENERAL DE EXPEDIENTES',
        representante:'Mesa de Partes',
        anexo:'33682'
    },
    {
        sede:'SEDE MANCO CAPAC',
        representante:'Mesa de Partes NLPT',
        anexo:'33526'
    },
    {
        sede:'SEDE MANCO CAPAC',
        representante:'Mesa de Partes Tradicional',
        anexo:'33523'
    },
    {
        sede:'SEDE MANANTAY',
        representante:'Juzgado de Paz Letrado - Mesa de Partes',
        anexo:'33662'
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
        sede:'SEDE CAMPO VERDE',
        representante:'Mesa de Partes',
        anexo:'33710'
    },
    {
        sede:'SEDE PADRE ABAD',
        representante:'Mesa de Partes',
        anexo:'33601'
    },
    {
        sede:'SEDE PUERTO INCA',
        representante:'Juzgado de Paz Letrado - Mesa de Partes',
        anexo:'33721'
    },
    {
        sede:'SEDE ATALAYA',
        representante:'Mesa de Partes',
        anexo:'33610'
    },
    {
        sede:'SEDE CONTAMANA',
        representante:'Mesa de Partes',
        anexo:'30681'
    }
    
 ]
 
 useEffect(() => {
    setDataGe(general)
  }, [])
  return {
    dataGe
  }
}
