import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiPj = () => {

   const [dataPj, setDataPj] = useState<directorioInterface[]>() ;

   const presidencia:Array<directorioInterface> = [
    {
        dependencia:'PUERTA PRINCIPAL - CONTROL DE VIGILANCIA',
        anexo:'33000'
    },
    {
        dependencia:'PRESIDENCIA DE CORTE',
        anexo:'33001'
    },
    {
        dependencia:'PRESIDENCIA SALA PLENA',
        anexo:'33002'
    },
    {
        dependencia:'PRESIDENCIA DE CORTE - MESA DE PARTES',
        anexo:'33003'
    },
    {
        dependencia:'PRESIDENCIA DE CORTE - SECRETARIA ADMINISTRATIVA',
        anexo:'33004'
    },
    {
        dependencia:'1° SALA PENAL DE APELACIONES EN ADICION LIQUIDADORA -PRESIDENCIA',
        anexo:'33005'
    },
    {
        dependencia:'1° SALA PENAL DE APELACIONES-JUEZ SUPERIOR',
        anexo:'33006'
    },
    {
        dependencia:'1° SALA PENAL DE APELACIONES-JUEZ SUPERIOR',
        anexo:'33007'
    },
    {
        dependencia:'1° SALA PENAL DE APELACIONES-ASIST. PRESIDENCIA',
        anexo:'33008'
    },
    {
        dependencia:'1° SALA PENAL DE APELACIONES-SECRETARIA',
        anexo:'33009'
    },
    {
        dependencia:'1° SALA PENAL DE APELACIONES-ESPECIALISTA DE SALA',
        anexo:'33010'
    },
    {
        dependencia:'1° SALA PENAL DE APELACIONES-RELATOR DE SALA',
        anexo:'33011'
    },
    {
        dependencia:'1° SALA PENAL DE APELACIONES-MODULO PENAL NCPP ',
        anexo:'33012'
    },
    {
        dependencia:'SALA CIVIL Y AFINES - PRESIDENCIA',
        anexo:'33013'
    },
    {
        dependencia:'SALA CIVIL - JUEZ SUPERIOR',
        anexo:'33014'
    },
    {
        dependencia:'SALA CIVIL - JUEZ SUPERIOR',
        anexo:'33015'
    },
    {
        dependencia:'SALA CIVIL - POOL ASISTENTES',
        anexo:'33016'
    },
    {
        dependencia:'SALA CIVIL-RELATORIA',
        anexo:'33017'
    },
    {
        dependencia:'SALA CIVIL -  SECRETARIA',
        anexo:'33018'
    },
    {
        dependencia:'2° SALA PENAL DE APELACIONES EN ADICION LIQUIDADORA -PRESIDENCIA',
        anexo:'33019'
    },
    {
        dependencia:'2° SALA PENAL-LIQUIDADORA-JUEZ SUPERIOR',
        anexo:'33020'
    },
    {
        dependencia:'2° SALA PENAL-LIQUIDADORA-JUEZ SUPERIOR',
        anexo:'33021'
    },
    {
        dependencia:'2° SALA PENAL-LIQUIDADORA-ASISTENTE DE JUECES',
        anexo:'33022'
    },
    {
        dependencia:'2° SALA PENAL-LIQUIDADORA-SECRETARIA',
        anexo:'33023'
    },
    {
        dependencia:'2° SALA PENAL-LIQUIDADORA-POOL DE ASISTENTES',
        anexo:'33024'
    },
    {
        dependencia:'2° SALA PENAL-LIQUIDADORA-RELATORIA',
        anexo:'33025'
    },
    {
        dependencia:'2° SALA PENAL-LIQUIDADORA-ASISTENTE',
        anexo:'33026'
    },
    {
        dependencia:'ODECMA - JEFATURA',
        anexo:'33027'
    },
    {
        dependencia:'ODECMA - SECRETARIA',
        anexo:'33028'
    },
    {
        dependencia:'ODECMA - ASISTENTES',
        anexo:'33029'
    },
    {
        dependencia:'ODECMA - MESA PARTES',
        anexo:'33030'
    },
    {
        dependencia:'UNIDAD DESCONCENTRADA DE INVESTIGACION  VISITAS Y QUEJAS',
        anexo:'33031'
    },
    {
        dependencia:'3er. JUZGADO UNIPERSONAL-DESPACHO JUEZ',
        anexo:'33042'
    },
    {
        dependencia:'ASISTENTE DEL  3er. JUP',
        anexo:'33043'
    },
    {
        dependencia:'ASESORIA LEGAL',
        anexo:'33046'
    },
    {
        dependencia:'IMAGEN INSTITUCIONAL',
        anexo:'33047'
    },
    {
        dependencia:'2do. JUZGADO UNIPERSONAL-DESPACHO JUEZ',
        anexo:'33048'
    },
    {
        dependencia:'1er. JUZGADO UNIPERSONAL-DESPACHO JUEZ',
        anexo:'33051'
    },
    {
        dependencia:'JUZGADO PENAL COLEGIADO-DESPACHO JUEZ - PRESIDENCIA',
        anexo:'33053'
    },
    {
        dependencia:'JUZGADO PENAL COLEGIADO-DESPACHO JUEZ ',
        anexo:'33054'
    },
    {
        dependencia:'JUZGADO PENAL COLEGIADO-DESPACHO JUEZ',
        anexo:'33055'
    },
    {
        dependencia:'1er. JUZGADO DE INVESTIGACION PREPARATORIA - DESPACHO JUEZ',
        anexo:'33057'
    },
    {
        dependencia:'2do. JUZGADO DE INVESTIGACION PREPARATORIA - DESPACHO JUEZ',
        anexo:'33059'
    },
    {
        dependencia:'3er. JUZGADO DE INVESTIGACION PREPARATORIA - DESPACHO JUEZ',
        anexo:'33062'
    },
    {
        dependencia:'4er. JUZGADO DE INVESTIGACION PREPARATORIA - DESPACHO JUEZ',
        anexo:'33064'
    },
    {
        dependencia:'JUZGADO DE INVESTIGACION PREPARATORIA AMBIENTAL - DESPACHO JUEZ',
        anexo:'33066'
    },
    {
        dependencia:'ADMINISTRADOR NCPP',
        anexo:'33068'
    },
    {
        dependencia:'MESA PARTES NCPP',
        anexo:'33070'
    },
    {
        dependencia:'2AREA DE COMUNICACIONES DEL NCPP',
        anexo:'33071'
    },
    {
        dependencia:'COORDINADORA DE AUDIENCIAS GRABACION Y CUSTODIA EXPEDIENTES',
        anexo:'33072'
    },
    {
        dependencia:'COORDINADORA CAUSAS JIP',
        anexo:'33073'
    },
    {
        dependencia:'COORDINADORA CAUSAS JUP',
        anexo:'33074'
    },
    {
        dependencia:'SECRETARIA DE EJECUCION',
        anexo:'33075'
    },
    {
        dependencia:'CENTRO DE DISTRIBUCION GENERAL - CDG JEFACTURA',
        anexo:'33076'
    },
    {
        dependencia:'SALA DE LECTURA DE EXPEDIENTES',
        anexo:'33077'
    },
    {
        dependencia:'CENTRAL DE NOTIFICACIONES',
        anexo:'33078'
    },
    {
        dependencia:'PUERTA 2-CONTROL DE VIGILANCIA VEHICULAR ',
        anexo:'33079'
    },
    {
        dependencia:'INFORMATICA',
        anexo:'33081'
    },
    {
        dependencia:'COORDINADORA DE INFORMATICA',
        anexo:'33080'
    },
    {
        dependencia:'INFORMATICA - VIDEO CONFERENCIAS NCPP',
        anexo:'33083'
    },
    {
        dependencia:'MANTENIMIENTO',
        anexo:'33084'
    },
    {
        dependencia:'ALMACEN CENTRAL',
        anexo:'33085'
    },
    {
        dependencia:'TRANSPORTE - CHOFERES',
        anexo:'33086'
    },
    {
        dependencia:'JEFE DE SEGURIDAD',
        anexo:'33159'
    },
    {
        dependencia:'CONSULTORIO MEDICO',
        anexo:'33179'
    },

        ]
    useEffect(() => {
      setDataPj(presidencia)
    }, [])
    
  return{
    dataPj
  }
}

export default apiPj