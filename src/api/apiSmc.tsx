import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiSmc = () => {

   const [dataSmc, setData] = useState<directorioInterface[]>([]) ;

   const mancocapac:Array<directorioInterface> = [
    {
        dependencia:'1er JUZGADO DE PAZ LETRADO- DESPACHO JUEZ',
        anexo:'33504',
        nombre:'JESENIA ACHO FLORES'
    },
    {
        dependencia:'1er JUZGADO DE PAZ LETRADO- SECRETARIAS JUDICIALES',
        anexo:'33503',
        nombre:'SUSANA MARTINA RIVERA REATEGUI'
    },
    {
        dependencia:'2do JUZGADO DE PAZ LETRADO- DESPACHO JUEZ',
        anexo:'33501',
        nombre:'SOLIA WILDA ESCHEVARRIA POMA'
    },
    {
        dependencia:'2do JUZGADO DE PAZ LETRADO- SECRETARIAS JUDICIALES',
        anexo:'33508',
        nombre:'PAULA FLORES JOSEPH'
    },
    {
        dependencia:'3er JUZGADO DE PAZ LETRADO- DESPACHO JUEZ',
        anexo:'33507',
        nombre:'NERY VANESA SOSA NAVARRO'
    },
    {
        dependencia:'3er JUZGADO DE PAZ LETRADO- SECRETARIAS JUDICIAL',
        anexo:'33502',
        nombre:'ERIKA MARTEL DEL RISCO'
    },
    {
        dependencia:'JUZGADO DE EXTINCION DE DOMINIO - DESPACHO JUEZ',
        anexo:'33533',
        nombre:'SILVANA LISELLY SALAZAR PAZ'
    },
    {
        dependencia:'JUZGADO DE EXTINCION DE DOMINIO - SECRETARIO JUDICIAL',
        anexo:'33534',
        nombre:'CRISTIAN IGNACIO QUEVEDO ALVAREZ'
    },
    {
        dependencia:'PRESIDENTE DE SALA NLPT',
        anexo:'33510',
        nombre:'OVIDIO RAUL MEDINA NAVARRO'
    },
    {
        dependencia:'JUEZ SUPERIORES NLPT',
        anexo:'33500',
        nombre:'JORGE LEONARDO CHIPANA DIAZ'
    },
    {
        dependencia:'JUEZ SUPERIORES NLPT ',
        anexo:'33512',
        nombre:'MARLENE CRUZ COBEÑAS'
    },
    {
        dependencia:'RELATORIA DE LA SALA LABORAL',
        anexo:'33513',
        nombre:'SUELLEN POPOLIZIO PANDURO'
    },
    {
        dependencia:'SECRETARIO DE LA SALA LABORAL',
        anexo:'33514',
        nombre:'BORIS SANCHEZ TORRES'
    },
    {
        dependencia:'ASISTENTES SALA LABORAL',
        anexo:'33515',
        nombre:'SHARON KRISSEL ROMERO ARAUCO'
    },
    {
        dependencia:'2DO JUZGADO TRABAJO-DESPACHO DE JUEZ',
        anexo:'33516',
        nombre:'JULIO FAJARDO MESIAS'
    },
    {
        dependencia:'POOL AREA DE APOYO A LAS CAUSAS - MODULO CORPORATIVO LABORAL',
        anexo:'33517',
        nombre:'KARINA LIMACHE RAFAEL'
    },
    {
        dependencia:'2DO.  JUZGADO DE PAZ LETRADO NLPT',
        anexo:'33520',
        nombre:'VICTOR MIGUEL PORRAS CRISPIN'
    },
    {
        dependencia:'1ER.  JUZGADO DE PAZ LETRADO NLPT',
        anexo:'33518',
        nombre:'LARISSA CHAUCA RUIZ'
    },
    {
        dependencia:'POOL AREA DE APOYO AL JUEZ MODULO CORPORATIVO LABORAL',
        anexo:'33519',
        nombre:'ANA MELISSA SALAZAR DAVILA'
    },
    {
        dependencia:'POOL AREA DE APOYO AL JUEZ MODULO CORPORATIVO LABORAL',
        anexo:'33521',
        nombre:'ROCIO ACUY ARRUE'
    },
    {
        dependencia:'ADMINISTRADOR NLPT',
        anexo:'33522',
        nombre:'ROBERT ERNESTO ZEGARRA GARCIA'
    },
    {
        dependencia:'MESA DE PARTES NLPT',
        anexo:'33526',
        nombre:'ALAN VALLES MURRIETA'
    },
    {
        dependencia:'MESA DE PARTES TRADICIONAL',
        anexo:'33523',
        nombre:'MARISA CASTILLO CANAYO'
    },
    {
        dependencia:'ASISTENTE DE INFORMATICA MODULO CORPORATIVO LABORAL',
        anexo:'33524',
        nombre:'EMIGDIO JUNIOR RUIZ MELENDEZ'
    },
    {
        dependencia:'PERITO CONTABLE MODULO CORPORATIVO LABORAL',
        anexo:'33528',
        nombre:'JOSE LUIS ALBERTO LOPEZ SOUZA'
    },
    {
        dependencia:'CUSTODIA DE GRAB. DE LECTURA Y EXP. MODULO CORPORATIVO LABORAL',
        anexo:'33527',
        nombre:'CINDY VANESSA RIOS BRITTO'
    },
    {
        dependencia:'PUERTA PRINCIPAL-CONTROL DE VIGILANCIA',
        anexo:'33525'
    },
    {
        dependencia:'1ER JUZGADO TRABAJO-DESPACHO DE JUEZ',
        anexo:'33529',
        nombre:'JUAN ANDRES ZEVALLOS BASUALDO'
    },
    {
        dependencia:'1ER JUZGADO TRABAJO-SECRETARIA 1',
        anexo:'33530',
        nombre:'JUANA IRIS GASTELU QUIO'
    },
    {
        dependencia:'1ER JUZGADO TRABAJO-ASISTENTE JUDICIAL',
        anexo:'33531',
        nombre:'ROYER RUIZ VASQUEZ'
    },
    {
        dependencia:'1ER JUZGADO TRABAJO-ASISTENTE JUDICIAL',
        anexo:'33532',
        nombre:'ANA MARIA MACEDO TORRES'
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