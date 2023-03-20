import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSp = () => {

   const [dataSp, setData] = useState<directorioInterface[]>([]) ;

   const saenz:Array<directorioInterface> = [
    {
        dependencia:'MESA DE PARTES',
        anexo:'33177',
        nombre:'MARIA FRANCISCA AYLAS YUIMACHI'
    },
    {
        dependencia:'1er. JUZGADO CIVIL - DESPACHO JUEZ',
        anexo:'33032',
        nombre:'CESAR JEAN FRANK TUCTO SANTAMARIA'
    },
    {
        dependencia:'1er. JUZGADO CIVIL - ASISTENTE JUEZ',
        anexo:'33033',
        nombre:'ANDRY BORGES VASQUEZ'
    },
    {
        dependencia:'1er. JUZGADO CIVIL - SECRETARIA JUDICIAL',
        anexo:'33034',
        nombre:'NATTY SILLO PACORI'
    },
    {
        dependencia:'1er. JUZGADO CIVIL - SECRETARIA JUDICIAL',
        anexo:'33035',
        nombre:'IRMA DORIS LOPEZ PARADO'
    },
    {
        dependencia:'1er. JUZGADO CIVIL - SECRETARIA JUDICIAL',
        anexo:'33036',
        nombre:'MARJORIE KARLA CAROLINA DIAZ VARGAS'
    },
    {
        dependencia:'2do. JUZGADO CIVIL - DESPACHO JUEZ',
        anexo:'33037',
        nombre:'ROBERTO CARLOS GONZALES CHAVEZ'
    },
    {
        dependencia:'2do. JUZGADO CIVIL - ASISTENTE DESPACHO JUEZ',
        anexo:'33038',
        nombre:'LYTERBETTH VEGA MELENDEZ'
    },
    {
        dependencia:'2do. JUZGADO CIVIL - SECRETARIA JUDICIAL',
        anexo:'33040',
        nombre:'ERICKA MARINA CASSANA ARMAS'
    },
    {
        dependencia:'2do. JUZGADO CIVIL - SECRETARIA JUDICIAL',
        anexo:'33039',
        nombre:'ERICK GERALDO LOPEZ DEL AGUILA'
    },
    {
        dependencia:'2do. JUZGADO CIVIL - ASISTENTE JUDICIAL',
        anexo:'33041',
        nombre:'MAURO FERNANDO NAVARRO ZAMBRANO'
    },
    {
        dependencia:'JUZGADO DE TRABAJO TRANSITORIO - DESPACHO JUEZ',
        anexo:'33178',
        nombre:'KEPPLER WONG COELHO'
    },
    {
        dependencia:'JUZGADO DE TRABAJO TRANSITORIO - POOL DE ASISTENTES',
        anexo:'33180',
        nombre:'REY AREVALO ENCINAS'
    },
    {
        dependencia:'CONTROL DE VIGILANCIA',
        anexo:'33540',
        nombre:'SEGURIDAD'
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