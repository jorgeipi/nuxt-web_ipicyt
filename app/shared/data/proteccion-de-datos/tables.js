const basePath = import.meta.env.VITE_SOURCE + '/proteccionDeDatos/informacionRelevante';

const formato1Path = import.meta.env.VITE_SOURCE + '/proteccion-de-datos/informacion/formato-1-2';
const formato2Path = import.meta.env.VITE_SOURCE + '/proteccion-de-datos/informacion/formato-2-2';
const vertiente1Path = import.meta.env.VITE_SOURCE + '/proteccion-de-datos/informacion/vertiente-1';
const vertiente2Path = import.meta.env.VITE_SOURCE + '/proteccion-de-datos/informacion/vertiente-2';
const vertiente3Path= import.meta.env.VITE_SOURCE + '/proteccion-de-datos/informacion/vertiente-3';
const vertiente4Path = import.meta.env.VITE_SOURCE + '/proteccion-de-datos/informacion/vertiente-4';
const vertiente6Path = import.meta.env.VITE_SOURCE + '/proteccion-de-datos/informacion/vertiente-6';

export const tables =[
    {
        title:'Formato Apartado virtual “Protección de datos personales”',
        info:[
            [
                '1.',
                'Hipervínculo al apartado denominado “Protección de Datos Personales” publicado en el portal de internet del sujeto obligado en la página de inicio',
                'BienvenidaDP',
            ],
            [
                '2.',
                'Hipervínculo a la sección “1. Avisos de privacidad integrales” publicada dentro del apartado “Protección de Datos Personales”',
                'AvisosPrivacidad'
            ],
            [
                '3.',
                'Hipervínculo a la sección “2. Datos de contacto de la Unidad de Transparencia y, en su caso, del Oficial de Protección de Datos Personales” publicada dentro del apartado “Protección de Datos Personales”',
                'DatosContacto'
            ],
            [
                '4.',
                'Hipervínculo a la sección “3. Información relevante en materia de protección de datos personales” publicada dentro del apartado “Protección de Datos Personales”',
                'InformacionRelevante'
            ]
        ]

    },
    {
        title:'Vertiente 1: Principios Variable y formato 1.1 Aviso de Privacidad Integral”',
        intro:[
            '2024',
            '03/10/2022',
            '22/03/2024'
        ],
        info:[
            [
                '1.',
                'Hipervínculo al documento que contenga la información relativa al aviso o avisos de privacidad integrales :<br>a) Denominación del tratamiento de datos personales que lleva a cabo el sujeto obligado (incluido el tratamiento de datos de su personal) <br>b) Tipo de medio por el cual se difunde el aviso de privacidad (Físico / Electrónico / Físico y Electrónico / Óptico / Sonoro / Visual / Otra tecnología) <br>c) Lugar físico en el cual el titular podrá revisar el aviso de privacidad <br>d) Hipervínculo al aviso de privacidad publicado en el portal de internet del responsable',
                `${vertiente1Path}/Copia%20de%202.%20Anexo-%20Gu%C3%ADa%201.%20Informaci%C3%B3n%20sobre%20el%20aviso%20o%20los%20avisos%20de%20privacidad%20integrales.xlsx`,
            ]
        ]

    },
    {
        title:'Variable y formato 1.2 Mecanismos para acreditar el cumplimiento de principios, deberes y obligaciones de la Ley General y demás disposiciones aplicables',
        intro:[
            '2024',
            '03/10/2022',
            '17/01/2025'
        ],
        info:[
            [
                '1.',
                'Oficio o instrumento a través del cual se autoriza el destino de recursos para la instrumentación de programas y políticas de protección de datos personales',
                `${formato1Path}/TRMN-011-2025.pdf`
            ],
            [
                '2.',
                'Hipervínculo al programa o política de protección de datos personales',
                `${formato1Path}/PROGRAMA%20DE%20PROTECCI%C3%93N%20DE%20DATOS%20PERSONALES%20%20IPICYT.pdf`
            ],
            [
                '3.',
                'Hipervínculo al programa de capacitación de protección de datos personales',
                `${formato1Path}/PROGRAMA%20ANUAL%20DE%20CAPACITACI%C3%93N%20EN%20MATERIA%20DE%20PROTECCI%C3%93N%20DE%20DATOS%20PERSONALES%202024.pdf`
            ],
            [
                '4.',
                'Hipervínculo al documento en el cual se especifiquen los sistemas de supervisión y vigilancia',
                `${formato1Path}/SISTEMAS%20DE%20SUPERVISI%C3%93N%20Y%20VIGILANCIA.pdf`
            ],
            [
                '5.',
                'Hipervínculo al documento en el cual el responsable establece el procedimiento para la recepción y respuesta de dudas, y quejas de los titulares en materia de protección de datos personales',
                `${formato1Path}/Procedimiento%20para%20ejercer%20los%20Derechos%20ARCO.pdf`
            ]
        ]
    },
    {
        title:'Vertiente 2: Deberes Variable y formato 2.1 Deber de seguridad',
        intro:[
            '2024',
            '03/10/2022',
            '31/05/2024'
        ],
        info:[
            [
                '1.',
                'Hipervínculo a la <b>versión pública</b> del documento de seguridad del responsable, testando únicamente lo relativo al plan de trabajo que contiene, además, el análisis de riesgo y brecha <b>Por ningún motivo debe incluirse en este apartado el documento de seguridad íntegro con el que cuenta el responsable. El documento de seguridad deberá publicarse protegiendo el plan de trabajo, el análisis de riesgo y el análisis de brecha respectivos; lo que implica que en caso de que se dejen visibles, sin excepción, será considerado como incumplimiento al presente criterio</b>',
                `${vertiente2Path}/VERSI%C3%93N%20P%C3%9ABLICA%20DOCUMENTO%20DE%20SEGURIDAD.zip`
            ],
            [
                '2.',
                'Hipervínculo al documento que contiene las políticas internas de gestión y tratamiento de los datos personales',
                `${vertiente2Path}/Politicas%20de%20Privacidad-2022.pdf`
            ]
        ]
    },
    {
        title:'Variable y formato 2.2 Deber de confidencialidad y comunicaciones de datos personales',
        intro:[
            '2024',
            '03/10/2022',
            '28/08/2024'
        ],
        info:[
            [
                '1.',
                'Hipervínculo al documento mediante el cual se establecen los controles dirigidos a asegurar la confidencialidad que deben guardar todas las personas que intervienen en cualquier fase del tratamiento de datos personales. Los controles deben identificarse con claridad de forma sencilla.',
                `${formato2Path}/Criterio%20CTIPICYT-01-2023.pdf`
            ],
            [
                '2.',
                'Hipervínculo al documento que contenga la relación de los instrumentos jurídicos que regulan la relación con los encargados, en cual se establecerá como cláusula general el guardar confidencialidad respecto de los datos personales tratados por el encargado. El documento deberá contener la denominación e hipervínculo de la versión pública de cada instrumento jurídico y su finalidad, así como indicar si estos incluyen la cláusula general de confidencialidad En caso de que no aplique, el responsable deberá especificar que a la fecha no se cuenta con Encargado(s).',
                `${formato2Path}/3.%20Anexo-%20Gu%C3%ADa%202.%20Instrumentos%20jur%C3%ADdicos%20que%20regulan%20la%20relaci%C3%B3n%20con%20los%20encargados.xlsx`
            ],
            [
                '3.',
                'Hipervínculo al documento que contenga la relación de los instrumentos jurídicos mediante los cuales se formaliza la contratación o adhesión a servicios, aplicaciones e infraestructura en el cómputo en la nube y otras materias, en los cuales se establezcan las condiciones o cláusulas generales de contratación, incluidas aquéllas en las cuales el o los proveedores se obliguen a guardar confidencialidad respecto de los datos personales sobre los que se preste(n) el servicio. El documento deberá contener la denominación e hipervínculo de la versión pública de cada instrumento jurídico, su finalidad e indicar si incluyen las condiciones o cláusulas generales de la contratación, así como la cláusula general de confidencialidad En caso de que no aplique, el responsable deberá especificar que a la fecha no se cuenta con proveedor(es) de servicios, aplicaciones e infraestructura en el cómputo en la nube y otras materias.'
            ],
            [
                '4.',
                'Hipervínculo al documento que contenga la relación de los instrumentos jurídicos mediante los cuales se formalizan las transferencias de datos personales, y en los cuales el receptor de los datos personales se obliga a garantizar la confidencialidad de los datos personales a los que da tratamiento. El documento deberá contener la denominación e hipervínculo de la versión pública de cada instrumento jurídico, su finalidad, breve descripción de la forma en la que se obtuvo el consentimiento del titular, o bien, especificar alguna de las excepciones establecidas en los artículos 22 fracción II y/o 70 de la Ley General; medio o forma por el que el responsable comunicó al receptor de los datos personales, el aviso de privacidad conforme al cual se tratan los datos personales frente al titular; así como indicar si estos incluyen la cláusula general de confidencialidad En caso de que no aplique, el responsable deberá especificar que a la fecha no se han realizado transferencias, o bien, que no aplica por actualizarse alguno de los supuestos que establece el artículo 66 fracciones I y II de la Ley General.',
                `${formato2Path}/5.%20Anexo-%20Gu%C3%ADa%204.%20Transferencias%20de%20datos%20personales%20PERSONAL%20(2).xlsx`
            ]
        ]
    },
    {
        title:'Vertiente 3: Ejercicio de los derechos ARCO Variable y formato 3.1 Mecanismos para el ejercicio de los derechos ARCO',
        intro:[
            '2024',
            '03/10/2022',
            '17/01/2025'
        ],
        info:[
            [
                '1.',
                'Hipervínculo del documento que contiene los medios y procedimientos habilitados por el responsable para atender las solicitudes para el ejercicio de los derechos ARCO',
                `${vertiente3Path}/Procedimiento%20para%20ejercer%20los%20Derechos%20ARCO.pdf`
            ],
            [
                '2.',
                'Hipervínculo al documento que detalla la siguiente información relativa a las solicitudes para el ejercicio del derecho de Acceso a datos personales recibidas por el sujeto obligado:<br>a) Número de solicitudes recibidas<br>b) Número de solicitudes atendidas dentro del plazo legal establecido<br>c) Número de solicitudes que no se atendieron dentro del plazo legal establecido<br>En caso de no haber recibidos solicitudes para el ejercicio del derecho de Acceso a datos personales, deberá especificarlo en el presente formato sin que sea necesario publicar documento alguno.',
                `${vertiente3Path}/ACCESO%20A%20DATOS%20PESONALES%20(2).xlsx`
            ],
            [
                '3.',
                'Hipervínculo al documento que detalla la siguiente información relativa a las solicitudes para el ejercicio del derecho de Rectificación de datos personales recibidas por el sujeto obligado:<br>a) Número de solicitudes recibidas<br>b) Número de solicitudes atendidas dentro del plazo legal establecido<br>c) Número de solicitudes que no se atendieron dentro del plazo legal establecido<br>En caso de no haber recibido solicitudes para el ejercicio del derecho de Rectificación de datos personales, deberá especificarlo en el presente formato sin que sea necesario publicar documento alguno.',
                'nolink:Durante el ejercicio 2024, no se ha recibido Solicitudes para el ejercicio del derecho de Rectificación de datos personales.'
            ],
            [
                '4.',
                'Hipervínculo al documento que detalla la siguiente información relativa a las solicitudes para el ejercicio del derecho de Cancelación de datos personales recibidas por el sujeto obligado:<br>a) Número de solicitudes recibidas<br>b) Número de solicitudes atendidas dentro del plazo legal establecido<br>c) Número de solicitudes que no se atendieron dentro del plazo legal establecido<br>En caso de no haber recibido solicitudes para el ejercicio del derecho de Cancelación de datos personales, deberá especificarlo en el presente formato sin que sea necesario publicar documento alguno.',
                'nolink:Durante el ejercicio 2024, no se ha recibido Solicitudes para el ejercicio del derecho de Cancelación de datos personales.'
            ],
            [
                '5.',
                'Hipervínculo al documento que detalla la siguiente información relativa a las solicitudes para el ejercicio del derecho de Oposición al tratamiento de datos personales recibidas por el sujeto obligado:<br>a) Número de solicitudes recibidas<br>b) Número de solicitudes atendidas dentro del plazo legal establecido<br>c) Número de solicitudes que no se atendieron dentro del plazo legal establecido<br>En caso de no haber recibidos solicitudes para el ejercicio del derecho de Oposición al tratamiento de datos personales, deberá especificarlo en el presente formato sin que sea necesario publicar documento alguno.',
                'nolink:Durante el ejercicio 2024, no se ha recibido Solicitudes para el ejercicio del derecho de Oposición de datos personales.'
            ]
        ]
    },
    {
        title:'Vertiente 4: Portabilidad Variable y formato 4.1 Portabilidad de datos personales',
        intro:[
            '2024',
            '03/10/2022',
            '08/10/2024'
        ],
        info:[
            [
                '1.',
                'Indique si el sujeto obligado realiza tratamientos de datos personales por medios automatizados o electrónicos (Sí / No) <br>En caso de no realizar tratamientos de datos personales por medios automatizados o electrónicos, se deberá incluir la siguiente leyenda: <br>“El/la (nombre del sujeto obligado) no realiza tratamiento de datos personales por medios automatizados o electrónicos.” <br>En caso de no hacerlo deberá omitir publicar información en los siguientes criterios de la presente variable',
                'nolink:Si'
            ],
            [
                '2.',
                'Señale si emplea un formato electrónico accesible y legible por medios automatizados, es decir, que éstos últimos pueden identificar, reconocer, extraer, explorar o realizar cualquier otra operación con datos personales específicos (Sí / No)',
                'nolink:Si'
            ],
            [
                '3.',
                'Indique si el formato utilizado permite la reutilización y/o aprovechamiento de los datos personales (Sí / No)',
                'nolink:Si'
            ],
            [
                '4.',
                'Documento que contenga el hipervínculo al / a los aviso(s) de privacidad integral(es) por cada tratamiento de datos personales en los cuales sea posible solicitar la portabilidad de estos, donde se establezcan los tipos o categorías de datos personales que técnicamente sean portables; el o los tipos de formatos estructurados y comúnmente utilizados disponibles para obtener o transmitir sus datos personales, y los mecanismos, medios y procedimientos disponibles para que el titular pueda solicitar la portabilidad de sus datos personales. Dicho documento deberá contener la siguiente información:<br>a) Denominación del tratamiento de datos personales que permite la portabilidad<br>b) Tipo de medio por el cual se difunde el aviso de privacidad (Físico / Electrónico / Físico y Electrónico / Óptico / Sonoro / Visual / Otra tecnología)<br>c) Lugar físico en el cual el titular podrá revisar el aviso de privacidad<br>d) Hipervínculo al aviso de privacidad publicado en el portal de internet del responsable',
                `${vertiente4Path}/7.%20Anexo-%20Gu%C3%ADa%206.%20Avisos%20de%20privacidad%20portabilidad.xlsx`
            ],
            [
                '5.',
                'Señale si en caso de que el titular no acompañe a su solicitud el medio de almacenamiento para la elaboración de la copia correspondiente de sus datos personales, el sujeto obligado facilita dicho medio de almacenamiento (Sí / No)',
                'nolink:Si'
            ],
            [
                '6.',
                'Hipervínculo al documento mediante el cual establece las medidas de seguridad de carácter administrativo, físico y técnico para la transmisión de los datos personales como son, de manera enunciativa mas no limitativa, mecanismos de autenticación de usuarios, conexiones seguras, o bien, utilizar medios electrónicos de transmisión cifrados.<br><u>En caso de tratarse del documento de seguridad, deberá incluir la versión pública del mismo. Por ningún motivo debe incluirse en este apartado el documento de seguridad íntegro con el que cuenta el responsable. El documento de seguridad deberá publicarse protegiendo el plan de trabajo, el análisis de riesgo y el análisis de brecha respectivos; lo que implica que en caso de que se dejen visibles, sin excepción, será considerado como incumplimiento al presente criterio<u>',
                `${vertiente4Path}/VERSI%C3%93N%20P%C3%9ABLICA%20DOCUMENTO%20DE%20SEGURIDAD.zip`
            ]
        ]
    },
    {
        title:'Vertiente 5: Acciones preventivas en materia de protección de datos personales Variable y formato 5.1 Evaluación de impacto en la protección de datos personales',
        intro:[
            '2024',
            '03/10/2022',
            '08/10/2024'
        ],
        info:[
            [
                '1.',
                'Denominación de la política pública, programa, sistema, plataforma, aplicación o cualquier otra actividad que implique el tratamiento intensivo o relevante de datos personales realizado.<br>En caso de que no aplique, el responsable deberá especificarlo y deberá omitir ingresar información en los criterios subsecuentes de la presente variable',
            ],
            [
                '2.',
                'La política pública, programa, sistema, plataforma, aplicación o cualquier otra actividad que implique el tratamiento intensivo o relevante de datos personales realizado está sujeta a alguna de las exenciones de la presentación de evaluación de impacto (Sí/No)',
                'nolink:'
            ],
            [
                '3.',
                'En caso de una respuesta en sentido afirmativo, hipervínculo al informe de exención emitido por el INAI. Deberá omitir ingresar información en los criterios subsecuentes de la presente variable.<br>En caso de que la política pública, programa, sistema, plataforma, aplicación o cualquier otra actividad que implique el tratamiento intensivo o relevante de datos personales realizado, no esté sujeta a alguna de las exenciones de la presentación de evaluación de impacto, publicar el hipervínculo a la evaluación de impacto entregada al INAI',
                'nolink:'
            ],
            [
                '4.',
                'Hipervínculo al dictamen de recomendaciones no vinculantes correspondiente emitido por el INAI',
                'nolink:'
            ]
        ]
    },
    {
        title:'Vertiente 6: Responsables en materia de Protección de Datos Personales Variable y formato 6.1 El Comité de Transparencia y la Unidad de Transparencia',
        intro:[
            '2024',
            '03/10/2022',
            '08/10/2024'
        ],
        info:[
            [
                '1.',
                'Indicar si cuenta con Comité de Transparencia (Sí/No)<br>En caso de que la respuesta sea negativa deberá omitir ingresar información en los criterios subsecuentes del presente formato',
                'nolink:Si'
            ],
            [
                '2.',
                'Hipervínculo al documento que contenga los procedimientos internos establecidos e implementados que aseguren mayor eficiencia en la gestión de las solicitudes para el ejercicio de los derechos ARCO',
                `${vertiente6Path}/PROCEDIMIENTO%20INTERNO%20DE%20SOLICITUDES%20ARCOP.pdf`
            ],
            [
                '3',
                'Hipervínculo a los criterios específicos establecidos por el Comité para la mejor observancia de la Ley General y de aquellas disposiciones aplicables en la materia.',
                `${vertiente6Path}/Criterio%20CTIPICYT-01-2023%20Reiterado.pdf`
            ],
            [
                '4.',
                'Hipervínculo al programa de capacitación y actualización de los servidores públicos del responsable establecido por el Comité',
                `${vertiente6Path}/2.%20Formato%20de%20Programa%20de%20Capacitaci%C3%B3n.pdf`
            ],
            [
                '5.',
                'Indique si cuenta con Unidad de Transparencia (Sí/No).<br>En caso de que la respuesta sea negativa deberá omitir ingresar información en los criterios subsecuentes de la presente variable',
                'nolink:Si'
            ],
            [
                '6.',
                'Señale si la Unidad de Transparencia es el área encargada de gestionar las solicitudes para el ejercicio de los derechos ARCO (SÍ / No)',
                'nolink:Si'
            ],
            [
                '7.',
                'Hipervínculo al documento que contenga los mecanismos establecidos por la Unidad de Transparencia para asegurar que los datos personales solo se entreguen a su titular o su representante debidamente acreditados.',
                `${vertiente6Path}/Procedimiento%20para%20ejercer%20los%20Derechos%20ARCO.pdf`
            ],
            [
                '8.',
                'Hipervínculo al documento mediante el cual el responsable da a conocer al público en general, los costos por la reproducción y envío de los datos personales que le sean solicitados, con base en lo establecido en las disposiciones normativas aplicables',
                `${vertiente6Path}/OFICIO%20349.pdf`
            ],
            [
                '9.',
                'Hipervínculo al documento que contiene los instrumentos aplicados para evaluar calidad sobre la gestión de las solicitudes para el ejercicio de los derechos ARCO',
                `${vertiente6Path}/Formato%20Encuesta.pdf`
            ],
            [
                '10.',
                'Hipervínculo al documento que enliste el o los acuerdos realizados con instituciones públicas especializadas para auxiliar en la recepción, trámite y entrega de las respuestas a solicitudes de datos personales, en lengua indígena, braille o cualquier formato accesible correspondiente, en forma más eficiente',
                `${vertiente6Path}/Instrumento%20de%20adhesion-2.pdf`
            ]
        ]
    },
    {
        title:'Variable y formato 6.2 Oficial de Protección de Datos Personales',
        intro:[
            '2024',
            '03/10/2022',
            '08/10/2024'
        ],
        info:[
            [
                '1.',
                'Lleva a cabo tratamientos de datos personales intensivos o relevantes (Sí/No)',
            ],
            [
                '2.',
                'Hipervínculo al documento mediante el cual el responsable designó al Oficial de protección de datos personales',
                'nolink:'
            ]
        ]
    }
];