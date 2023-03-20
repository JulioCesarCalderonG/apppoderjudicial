import React, {useState, useEffect} from 'react'
import { directorioInterface } from '../interface/directorioInterface';

const apiPj = () => {

   const [dataPj, setDataPj] = useState<directorioInterface[]>() ;

   const presidencia:Array<directorioInterface> = [
    {
        dependencia:'PUERTA PRINCIPAL - CONTROL DE VIGILANCIA',
        anexo:'33000',
        nombre:'ROLLY URIBE RIOS'
    },
    {
        dependencia:'PRESIDENCIA DE CORTE',
        anexo:'33001',
        nombre: 'TULLIO DEIFILIO BERMEO TURCHI'
    },
    {
        dependencia:'PRESIDENCIA SALA PLENA',
        anexo:'33002',
        nombre: 'RAQUEL ARCHELI AREVALO ARMAS'
    },
    {
        dependencia:'PRESIDENCIA DE CORTE - MESA DE PARTES',
        anexo:'33003',
        nombre: 'RAQUEL ARCHELI AREVALO ARMAS'
    },
    {
        dependencia:'PRESIDENCIA DE CORTE - SECRETARIA ADMINISTRATIVA',
        anexo:'33004',
        nombre: 'CINTHYA PATRICIA DIAZ MEZA'
    },
    {
        dependencia:'1° SALA PENAL DE APELACIONES EN ADICION LIQUIDADORA',
        anexo:'33005',
        nombre: 'FEDERICK RANDOLP RIVERA BERROSPI'
    },
    {
        dependencia:'1° SALA PENAL DE APELACIONES-JUEZ SUPERIOR',
        anexo:'33006',
        nombre: 'HERMOGENES VICENTE LIMA CHAYÑA'
    },
    {
        dependencia:'1° SALA PENAL DE APELACIONES-JUEZ SUPERIOR',
        anexo:'33007',
        nombre: 'JONATAN ORLANDO BASAGOITIA CARDENAS'
    },
    {
        dependencia:'1° SALA PENAL DE APELACIONES-ASIST. PRESIDENCIA',
        anexo:'33008',
        nombre: 'MERCEDES CALDERON GALINDO'
    },
    {
        dependencia:'1° SALA PENAL DE APELACIONES-SECRETARIA',
        anexo:'33009',
        nombre: 'LILIA DEL AGUILA MONCADA'
    },
    {
        dependencia:'1° SALA PENAL DE APELACIONES-ESPECIALISTA DE SALA',
        anexo:'33010',
        nombre: 'GIANNINA MACEDO SEGURA'
    },
    {
        dependencia:'1° SALA PENAL DE APELACIONES-RELATOR DE SALA',
        anexo:'33011',
        nombre: 'OMAR MAGNO GARCIA ZAVALETA'
    },
    {
        dependencia:'1° SALA PENAL DE APELACIONES-MODULO PENAL NCPP ',
        anexo:'33012',
        nombre: 'NELCY PEREZ SARAVIA'
    },
    {
        dependencia:'SALA CIVIL Y AFINES - PRESIDENCIA',
        anexo:'33013',
        nombre: 'AMERICO DARIO GUTIERREZ PINEDA'
    },
    {
        dependencia:'SALA CIVIL - JUEZ SUPERIOR',
        anexo:'33014',
        nombre: 'JENNER OWNER GARCIA DURAN'
    },
    {
        dependencia:'SALA CIVIL - JUEZ SUPERIOR',
        anexo:'33015',
        nombre: 'DAMIAN ENRIQUE ROSAS TORRES'
    },
    {
        dependencia:'SALA CIVIL - POOL ASISTENTES',
        anexo:'33016',
        nombre: 'LEONOR ESTHER ZAVALA LOPEZ'
    },
    {
        dependencia:'SALA CIVIL-RELATORIA',
        anexo:'33017',
        nombre: 'WILLIAM JERRY DEL AGUILA PEZO'
    },
    {
        dependencia:'SALA CIVIL -  SECRETARIA',
        anexo:'33018',
        nombre: 'YEK CAMPOS ZUMAETA'
    },
    {
        dependencia:'2° SALA PENAL DE APELACIONES EN ADICION LIQUIDADORA -PRESIDENCIA',
        anexo:'33019',
        nombre: 'AMERICO URCINO TORRES LOZANO'
    },
    {
        dependencia:'2° SALA PENAL-LIQUIDADORA-JUEZ SUPERIOR',
        anexo:'33020',
        nombre: 'JOSUE WAGNER CORDOVA PINTADO'
    },
    {
        dependencia:'2° SALA PENAL-LIQUIDADORA-JUEZ SUPERIOR',
        anexo:'33021',
        nombre: 'ROBIN HELBERT BARREDA ROJAS'
    },
    {
        dependencia:'2° SALA PENAL-LIQUIDADORA-ASISTENTE DE JUECES',
        anexo:'33022',
        nombre: 'TOM QUIO RIVERO'
    },
    {
        dependencia:'2° SALA PENAL-LIQUIDADORA-SECRETARIA',
        anexo:'33023',
        nombre: 'SARA ISLA BENITES'
    },
    {
        dependencia:'2° SALA PENAL-LIQUIDADORA-POOL DE ASISTENTES',
        anexo:'33024',
        nombre: 'ERICKA PATRICIA KAHN GARCIA'
    },
    {
        dependencia:'2° SALA PENAL-LIQUIDADORA-RELATORIA',
        anexo:'33025',
        nombre: 'CHRISTIAN EDUARDO VENEGAS CALLE'
    },
    {
        dependencia:'2° SALA PENAL-LIQUIDADORA-ASISTENTE',
        anexo:'33026',
        nombre: 'LLUCERO VASQUEZ SOPLIN'
    },
    {
        dependencia:'ODECMA - JEFATURA',
        anexo:'33027',
        nombre: 'MOISES ARCE CORDOVA'
    },
    {
        dependencia:'ODECMA - SECRETARIA',
        anexo:'33028',
        nombre: 'ROMINA PEREZ GARCIA'
    },
    {
        dependencia:'ODECMA - ASISTENTES',
        anexo:'33029',
        nombre: 'KATHERINE XIOMARA CAVERO EGUSQUIZA CACERES'
    },
    {
        dependencia:'ODECMA - MESA PARTES',
        anexo:'33030',
        nombre: 'ISABEL ABIGAIL CUYA LOPEZ'
    },
    {
        dependencia:'UNIDAD DESCONCENTRADA DE INVESTIGACION  VISITAS Y QUEJAS',
        anexo:'33031',
        nombre: 'BRENDA BARBARAN AREVALO'
    },
    {
        dependencia:'3er. JUZGADO UNIPERSONAL-DESPACHO JUEZ',
        anexo:'33042',
        nombre: 'ANA KARINA BEDOYA MAQUE'
    },
    {
        dependencia:'ASISTENTE DEL  3er. JUP',
        anexo:'33043',
        nombre: 'VICTORIA PAREDES SANCHEZ'
    },
    {
        dependencia:'ASESORIA LEGAL',
        anexo:'33046',
        nombre: 'RICHARD LLAIQUI JAUREGUI'
    },
    {
        dependencia:'IMAGEN INSTITUCIONAL',
        anexo:'33047',
        nombre: 'JEFFERSON FRANCISCO GONZALES ISUIZA'
    },
    {
        dependencia:'2do. JUZGADO UNIPERSONAL-DESPACHO JUEZ',
        anexo:'33048',
        nombre: 'ANTAR DAMASO GARCIA COSIO'
    },
    {
        dependencia:'1er. JUZGADO UNIPERSONAL-DESPACHO JUEZ',
        anexo:'33051',
        nombre: 'NILDA LASTRA CLAUDIO'
    },
    {
        dependencia:'JUZGADO PENAL COLEGIADO-DESPACHO JUEZ - PRESIDENCIA',
        anexo:'33053',
        nombre: 'ASELA ISABEL BARBARAN RIOS'
    },
    {
        dependencia:'JUZGADO PENAL COLEGIADO-DESPACHO JUEZ ',
        anexo:'33054',
        nombre: 'SANDRA JANETH PIZARRO OSORIO'
    },
    {
        dependencia:'JUZGADO PENAL COLEGIADO-DESPACHO JUEZ',
        anexo:'33055',
        nombre: 'ROY ROGER RUIZ DAVILA'
    },
    {
        dependencia:'1er. JUZGADO DE INVESTIGACION PREPARATORIA - DESPACHO JUEZ',
        anexo:'33057',
        nombre: 'CESIA PEREZ RENGIFO'
    },
    {
        dependencia:'2do. JUZGADO DE INVESTIGACION PREPARATORIA - DESPACHO JUEZ',
        anexo:'33059',
        nombre: 'JASON PANDURO DEL AGUILA'
    },
    {
        dependencia:'3er. JUZGADO DE INVESTIGACION PREPARATORIA - DESPACHO JUEZ',
        anexo:'33062',
        nombre: 'IRENE HIDALGO ARMAS'
    },
    {
        dependencia:'4er. JUZGADO DE INVESTIGACION PREPARATORIA - DESPACHO JUEZ',
        anexo:'33064',
        nombre: 'MELINA DIAZ ACOSTA'
    },
    {
        dependencia:'JUZGADO DE INVESTIGACION PREPARATORIA AMBIENTAL - DESPACHO JUEZ',
        anexo:'33066',
        nombre: 'CELINDA PIZAN UGARTE'
    },
    {
        dependencia:'ADMINISTRADOR NCPP',
        anexo:'33068',
        nombre: 'VEMY MARINA YALTA'
    },
    {
        dependencia:'MESA PARTES NCPP',
        anexo:'33070',
        nombre: 'ENVERSON ALEX MATUTINO SANTILLAN'
    },
    {
        dependencia:'AREA DE COMUNICACIONES DEL NCPP',
        anexo:'33071',
        nombre: 'DANIEL AUGUSTO OLSSON CORIAT'
    },
    {
        dependencia:'COORDINADORA DE AUDIENCIAS GRABACION Y CUSTODIA EXPEDIENTES',
        anexo:'33072',
        nombre: 'JOSELA GARCES LOZANO'
    },
    {
        dependencia:'COORDINADORA CAUSAS JIP',
        anexo:'33073',
        nombre: 'NEYLA FLOR LINARES PEZO'
    },
    {
        dependencia:'COORDINADORA CAUSAS JUP',
        anexo:'33074',
        nombre: 'KAREN GIANINA TAMINCHI IHUARAQUI'
    },
    {
        dependencia:'SECRETARIA DE EJECUCION',
        anexo:'33075',
        nombre: 'ELIZABETH SILVA VALDIVIEZO'
    },
    {
        dependencia:'CENTRO DE DISTRIBUCION GENERAL - CDG JEFACTURA',
        anexo:'33076',
        nombre: 'LUCY ESTHER OCAMPO MALPARTIDA'
    },
    {
        dependencia:'SALA DE LECTURA DE EXPEDIENTES',
        anexo:'33077',
        nombre: 'DAVID CHUY RIVERA'
    },
    {
        dependencia:'CENTRAL DE NOTIFICACIONES',
        anexo:'33078',
        nombre: 'KAREN RAMIREZ DE IBARCENA'
    },
    {
        dependencia:'PUERTA 2-CONTROL DE VIGILANCIA VEHICULAR ',
        anexo:'33079',
        nombre: 'ROLLY URIBE RIOS'
    },
    {
        dependencia:'INFORMATICA',
        anexo:'33081',
        nombre: 'LUIS EDWARD CABANILLAS RIOS'
    },
    {
        dependencia:'COORDINADORA DE INFORMATICA',
        anexo:'33080',
        nombre: 'DORIS JEA-MILLE IRENE DIAZ'
    },
    {
        dependencia:'INFORMATICA - VIDEO CONFERENCIAS NCPP',
        anexo:'33083',
        nombre: 'RICARDO DAVILA SOTO'
    },
    {
        dependencia:'MANTENIMIENTO',
        anexo:'33084',
        nombre: 'WIGNER GRANDEZ TUTUSIMA'
    },
    {
        dependencia:'ALMACEN CENTRAL',
        anexo:'33085',
        nombre: 'ZORAIDA RIVERA QUICANA'
    },
    {
        dependencia:'TRANSPORTE - CHOFERES',
        anexo:'33086',
        nombre: 'DICK ABRAHAM PIKMANS LAVI'
    },
    {
        dependencia:'JEFE DE SEGURIDAD',
        anexo:'33159',
        nombre: 'ROLLY URIBE RIOS'
    },
    {
        dependencia:'CONSULTORIO MEDICO',
        anexo:'33179',
        nombre: 'DORIS SERRANO CASTILLO'
    }

        ]
    useEffect(() => {
      setDataPj(presidencia)
    }, [])
    
  return{
    dataPj
  }
}

export default apiPj