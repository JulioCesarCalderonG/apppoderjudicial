import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSmc = () => {

   const [dataSmc, setData] = useState<directorioInterface[]>([]) ;

   const mancocapac:Array<directorioInterface> = [
    {
        dependencia:'1er JUZGADO DE PAZ LETRADO- DESPACHO JUEZ',
        anexo:'33504'
    },
    {
        dependencia:'1er JUZGADO DE PAZ LETRADO- SECRETARIAS JUDICIALES',
        anexo:'33503'
    },
    {
        dependencia:'2do JUZGADO DE PAZ LETRADO- DESPACHO JUEZ',
        anexo:'33501'
    },
    {
        dependencia:'2do JUZGADO DE PAZ LETRADO- SECRETARIAS JUDICIALES',
        anexo:'33508'
    },
    {
        dependencia:'3er JUZGADO DE PAZ LETRADO- DESPACHO JUEZ',
        anexo:'33507'
    },
    {
        dependencia:'3er JUZGADO DE PAZ LETRADO- SECRETARIAS JUDICIAL',
        anexo:'33502'
    },
    {
        dependencia:'JUZGADO DE EXTINCION DE DOMINIO - DESPACHO JUEZ',
        anexo:'33533'
    },
    {
        dependencia:'JUZGADO DE EXTINCION DE DOMINIO - SECRETARIO JUDICIAL',
        anexo:'33534'
    },
    {
        dependencia:'PRESIDENTE DE SALA NLPT',
        anexo:'33510'
    },
    {
        dependencia:'JUEZ SUPERIORES NLPT',
        anexo:'33500'
    },
    {
        dependencia:'JUEZ SUPERIORES NLPT ',
        anexo:'33512'
    },
    {
        dependencia:'RELATORIA DE LA SALA LABORAL',
        anexo:'33513'
    },
    {
        dependencia:'SECRETARIO DE LA SALA LABORAL',
        anexo:'33514'
    },
    {
        dependencia:'ASISTENTES SALA LABORAL',
        anexo:'33515'
    },
    {
        dependencia:'2DO JUZGADO TRABAJO-DESPACHO DE JUEZ',
        anexo:'33516'
    },
    {
        dependencia:'POOL AREA DE APOYO A LAS CAUSAS - MODULO CORPORATIVO LABORAL',
        anexo:'33517'
    },
    {
        dependencia:'2DO.  JUZGADO DE PAZ LETRADO NLPT',
        anexo:'33520'
    },
    {
        dependencia:'1ER.  JUZGADO DE PAZ LETRADO NLPT',
        anexo:'33518'
    },
    {
        dependencia:'POOL AREA DE APOYO AL JUEZ MODULO CORPORATIVO LABORAL',
        anexo:'33519'
    },
    {
        dependencia:'POOL AREA DE APOYO AL JUEZ MODULO CORPORATIVO LABORAL',
        anexo:'33521'
    },
    {
        dependencia:'ADMINISTRADOR NLPT',
        anexo:'33522'
    },
    {
        dependencia:'MESA DE PARTES NLPT',
        anexo:'33526'
    },
    {
        dependencia:'MESA DE PARTES TRADICIONAL',
        anexo:'33523'
    },
    {
        dependencia:'ASISTENTE DE INFORMATICA MODULO CORPORATIVO LABORAL',
        anexo:'33524'
    },
    {
        dependencia:'PERITO CONTABLE MODULO CORPORATIVO LABORAL',
        anexo:'33528'
    },
    {
        dependencia:'CUSTODIA DE GRAB. DE LECTURA Y EXP. MODULO CORPORATIVO LABORAL',
        anexo:'33527'
    },
    {
        dependencia:'PUERTA PRINCIPAL-CONTROL DE VIGILANCIA',
        anexo:'33525'
    },
    {
        dependencia:'1ER JUZGADO TRABAJO-DESPACHO DE JUEZ',
        anexo:'33529'
    },
    {
        dependencia:'1ER JUZGADO TRABAJO-SECRETARIA 1',
        anexo:'33530'
    },
    {
        dependencia:'1ER JUZGADO TRABAJO-ASISTENTE JUDICIAL',
        anexo:'33531'
    },
    {
        dependencia:'1ER JUZGADO TRABAJO-ASISTENTE JUDICIAL',
        anexo:'33532'
    },
        ]
        useEffect(() => {
            setData(mancocapac);
          }, [])
  return{
    dataSmc
  }
}

export default apiSmc