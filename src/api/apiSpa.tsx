import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSpa = () => {

   const [dataSpa, setData] = useState<directorioInterface[]>([]) ;

   const padreabad:Array<directorioInterface> = [
    {
        dependencia:'MESA DE PARTE',
        anexo:'33601',
        nombre:'HELDO WILLIAM ENCARNACION CASTAÑEDA'
    },
    {
        dependencia:'JUZGADO JUP Y MIXTO - DESPACHO JUEZ',
        anexo:'33602',
        nombre:'NORMA TOVALINO BARRERA'
    },
    {
        dependencia:'JUZGADO MIXTO  Y JUP',
        anexo:'33603',
        nombre:'HEZIR GARMITA LOPEZ GONZALEZ'
    },
    {
        dependencia:'JUZGADO JIP Y PAZ LETRADO - DESPACHO JUEZ',
        anexo:'33604',
        nombre:'MARTIN VALDEMAR CRUZADO MEJIA'
    },
    {
        dependencia:'JIP Y PAZ LETRADO',
        anexo:'33605',
        nombre:'ROSMERY MARRUEROS ALVARADO'
    },
    {
        dependencia:'AREA DE INFORMATICA',
        anexo:'33606',
        nombre:'VICTOR DANIEL DAVILA SANCHEZ'
    },
        ]
        useEffect(() => {
            setData(padreabad);
          }, [])
  return{
    dataSpa
  }
}

export default apiSpa