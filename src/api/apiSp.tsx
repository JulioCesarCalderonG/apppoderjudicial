import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSp = () => {

   const [dataSp, setData] = useState<directorioInterface[]>([]) ;

   const saenz:Array<directorioInterface> = [
    {
        dependencia:'MESA DE PARTES',
        anexo:'33177'
    },
    {
        dependencia:'1er. JUZGADO CIVIL - DESPACHO JUEZ',
        anexo:'33032'
    },
    {
        dependencia:'1er. JUZGADO CIVIL - ASISTENTE JUEZ',
        anexo:'33033'
    },
    {
        dependencia:'1er. JUZGADO CIVIL - SECRETARIA JUDICIAL',
        anexo:'33034'
    },
    {
        dependencia:'1er. JUZGADO CIVIL - SECRETARIA JUDICIAL',
        anexo:'33035'
    },
    {
        dependencia:'1er. JUZGADO CIVIL - SECRETARIA JUDICIAL',
        anexo:'33036'
    },
    {
        dependencia:'2do. JUZGADO CIVIL - DESPACHO JUEZ',
        anexo:'33037'
    },
    {
        dependencia:'2do. JUZGADO CIVIL - ASISTENTE DESPACHO JUEZ',
        anexo:'33038'
    },
    {
        dependencia:'2do. JUZGADO CIVIL - SECRETARIA JUDICIAL',
        anexo:'33040'
    },
    {
        dependencia:'2do. JUZGADO CIVIL - SECRETARIA JUDICIAL',
        anexo:'33039'
    },
    {
        dependencia:'2do. JUZGADO CIVIL - ASISTENTE JUDICIAL',
        anexo:'33041'
    },
    {
        dependencia:'JUZGADO DE TRABAJO TRANSITORIO - DESPACHO JUEZ',
        anexo:'33178'
    },
    {
        dependencia:'JUZGADO DE TRABAJO TRANSITORIO - POOL DE ASISTENTES',
        anexo:'33180'
    },
    {
        dependencia:'CONTROL DE VIGILANCIA',
        anexo:'33540'
    },

        ]
        useEffect(() => {
            setData(saenz);
          }, [])
  return{
    dataSp
  }
}

export default apiSp