const basePath = import.meta.env.VITE_SOURCE + '/proteccion-de-datos/informacion';

const politicasPath = import.meta.env.VITE_SOURCE + '/proteccion-de-datos/informacion/politicas';
const infografiasPath = import.meta.env.VITE_SOURCE + '/proteccion-de-datos/informacion/infografias';
const guiaPath = import.meta.env.VITE_SOURCE + '/proteccion-de-datos/informacion/guia';
const procedimientoPath = import.meta.env.VITE_SOURCE + '/proteccion-de-datos/informacion/procedimiento';

export const buttons =[
    {
        title:'Normatividad',
        buttons:[
            {
                text:'Ley General de Protección de Datos Personales en Posesión de los Sujetos Obligados',
                url:'http://www.diputados.gob.mx/LeyesBiblio/pdf/LGPDPPSO.pdf'
            },
            {
                text:'Acuerdo mediante el cual se aprueban los Lineamientos Generales de Protección de Datos Personales',
                url:'http://www.dof.gob.mx/nota_detalle.php?codigo=5511540&fecha=26/01/2018'
            },
            {
                text:'Acuerdo mediante el cual se aprueba la adición de un Título Décimo a los Lineamientos Generales de Protección de Datos Personales',
                url:'https://www.dof.gob.mx/nota_detalle.php?codigo=5605789&fecha=25/11/2020'
            }
        ]   
    },
    {
        title:'Políticas de Privacidad',
        buttons:[
            {
                text:'2021',
                url:`${politicasPath}/Politicas%20de%20Privacidad.pdf`
            },
            {
                text:'2022',
                url:`${politicasPath}/Politicas%20de%20Privacidad-2022.pdf`
            }
        ]
    },
    {
        title:'Infografías',
        buttons:[
            {
                text:'Instrumentos Técnicos de Evaluación',
                url:`${infografiasPath}/Infografia%201%20Instrumentos%20Tecnicos%20de%20Evaluacion.pdf`
            },
            {
                text:'Medios de verificación documentales para la evaluación del desempeño',
                url:`${infografiasPath}/Infografia%202%20Medios%20de%20verificacion%20documentales%20para%20la%20evaluacion%20del%20desempe%C3%B1o.pdf`
            },
            {
                text:'Dudas frecuentes del proceso de evaluación del desempeño',
                url:`${infografiasPath}/Infografia%203%20Dudas%20frecuentes%20del%20proceso%20de%20evaluacion%20del%20desempe%C3%B1o.pdf`
            },
            {
                text:'Reglas generales de evaluación',
                url:`${infografiasPath}/Infografia%204.%20Reglas%20generales%20de%20evaluacion.pdf`
            },
            {
                text:'Formatos para la evaluación del desempeño (Anexo 8)',
                url:`${infografiasPath}/Infografia%205%20Formatos%20para%20la%20evaluacion%20del%20desempe%C3%B1o%20(Anexo%208).pdf`
            }
        ]
    },
    {
        title:'Procedimiento y formato de presentación de denuncia',
        buttons:[
            {
                text:'Procedimiento y formato de presentación de denuncia',
                url:`${procedimientoPath}/Procedimiento%20y%20formato%20para%20la%20presentacion%20de%20denuncia.pdf`
            }
        ]
    },
    {
        title:'Guía para prevenir el robo de identidad',
        buttons:[
            {
                text:'Guía para prevenir el robo de identidad',
                url:`${guiaPath}/Guia_para_prevenir_el_robo_de_identidad.pdf`
            }
        ]
    }
];