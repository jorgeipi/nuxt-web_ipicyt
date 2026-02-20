<script setup>
import { getAperturaPath } from '@shared/helpers/transparencia/getPath';
const { setPageConfig } = usePageConfig()
setPageConfig({
  showBanner: true,
  showMenu: true,
  menuItems: [
    { label: 'Protección de Datos personales', to: '/proteccion-de-datos-personales/bienvenida', order: 2 }
  ],
})

definePageMeta({
  layout: false,
}) 
</script>

<template>
    <NuxtLayout name="main">
        <template #banner>
            <LayoutBannerBase image="/imgs/transparencia/acceso-informacion/acceso-informacion-header.png">
            <h1 class="h1-banner">Transparencia: <span class="font-weight-regular">Apertura Gubernamental</span></h1>
            </LayoutBannerBase>
        </template>
        <div class="apertura-gubernamental">
            <h2 class="mb-8">Transparencia: <span class="font-weight-regular">Apertura Gubernamental</span></h2>

            <div class="d-flex flex-column ga-5 mb-18">
                <TitleOverline><h2>Información socialmente útil</h2></TitleOverline>

                <p>Aquí encontraras información básica del IPICYT como antecedentes de creación, disposiciones legales, objeto,
                    atribuciones, funciones, etc.</p>

                <ButtonLink :href="getAperturaPath('Manual_Orgz_IPICYT_FINAL.pdf')" :color="'var(--color-text-subtle)'">
                    <p class="font-weight-bold">Manual de Organización del Instituto Potosino de Investigación Científica y Tecnológica, A.C.</p>
                </ButtonLink>

                <ButtonLink :href="getAperturaPath('Acta Constitutiva Protocolizacion IJC 2021.pdf')" :color="'var(--color-text-subtle)'">
                    <p class="font-weight-bold">Acta Constitutiva o Instrumento Jurídico de Creación del Instituto Potosino de Investigación Científica
                        y Tecnológica, A.C.</p>
                </ButtonLink>
            </div>

            <div class="d-flex flex-column ga-8">
                <TitleOverline><h2>Servicios y trámites de IPICYT</h2></TitleOverline>

                <div class="d-flex flex-column ga-8">
                    <AccordionLeft class="accordion pt-5" id="solicitud">
                        <template #title>
                            <h6>Solicitud de admisión al posgrado</h6>
                        </template>
                        <template #content>
                            <ul class="pl-5 d-flex flex-column ga-2">
                                <li><span class="font-weight-bold">Descripción Del Objetivo Del Servicio: </span>Ofrecer a la ciudadanía información para cursar estudios de posgrado en investigación científica en áreas como Biología Molecular, Matemáticas Aplicadas, Materiales Avanzados, Geociencias Aplicadas y Ciencias Ambientales.</li>
                                <li><span class="font-weight-bold">Modalidad del servicio: </span> Presencial</li>
                                <li><span class="font-weight-bold">Requisitos: </span> <a target="_blank" class="color-secondary link">Formulario</a></li>
                                <li><span class="font-weight-bold">Monto de los derechos: </span> Gratuito</li>
                                <li><span class="font-weight-bold">Información adicional: </span> <a target="_blank" class="color-secondary link" href="https://www.gob.mx/tramites/ficha/ingreso-a-maestrias-y-doctorados-en-ciencias-naturales-y-exactas-en-el-ipicyt/IPICYT6166">https://www.gob.mx/tramites/ficha/ingreso-a-maestrias-y-doctorados-en-ciencias-naturales-y-exactas-en-el-ipicyt/IPICYT6166</a></li>
                            </ul>
                        </template>
                    </AccordionLeft>

                    <AccordionLeft class="accordion pt-5" id="taller">
                        <template #title>
                            <h6>Taller de formación para la Divulgación de la Ciencia</h6>
                        </template>
                        <template #content>
                            <ul class="pl-5 d-flex flex-column ga-2">
                                <li><span class="font-weight-bold">Descripción Del Objetivo Del Servicio: </span>Solicitud de visita guiada a las instalaciones del Instituto, quien así lo solicite mediante escrito libre.</li>
                                <li><span class="font-weight-bold">Modalidad del servicio: </span> Presencial</li>
                                <li><span class="font-weight-bold">Requisitos: </span> Correo electrónico</li>
                                <li><span class="font-weight-bold">Monto de los derechos: </span> Gratuito</li>
                                <li><span class="font-weight-bold">Información adicional: </span> <a target="_blank" class="color-secondary link" href="https://www.gob.mx/tramites/ficha/visitas-guiadas-y-talleres-sobre-temas-cientificos-y-o-tecnologicos-en-el-ipicyt/IPICYT5325">https://www.gob.mx/tramites/ficha/visitas-guiadas-y-talleres-sobre-temas-cientificos-y-o-tecnologicos-en-el-ipicyt/IPICYT5325</a></li>
                            </ul>
                        </template>
                    </AccordionLeft>



                    <AccordionLeft class="accordion pt-5" id="definicion">
                        <template #title>
                            <h6>Definición de requerimiento de clientes para el desarrollo de nuevos proyectosa</h6>
                        </template>
                        <template #content>
                            <ul class="pl-5 d-flex flex-column ga-2">
                                <li><span class="font-weight-bold">Descripción Del Objetivo Del Servicio: </span>Servicios y/o desarrollo de proyectos de vinculación que atiendan necesidades de desarrollo y/o innovación específicos y mejoran procesos y productos.</li>
                                <li><span class="font-weight-bold">Modalidad del servicio: </span> Presencial</li>
                                <li><span class="font-weight-bold">Requisitos: </span> Correo electrónico</li>
                                <li><span class="font-weight-bold">Monto de los derechos: </span> Trámite gratuito hasta la confirmación de convenio de colaboración.</li>
                                <li><span class="font-weight-bold">Información adicional: </span> <a target="_blank" class="color-secondary link" href="https://www.gob.mx/tramites/ficha/servicios-y-desarrollo-de-proyectos-de-vinculacion/IPICYT5326">https://www.gob.mx/tramites/ficha/servicios-y-desarrollo-de-proyectos-de-vinculacion/IPICYT5326</a></li>
                            </ul>
                        </template>
                    </AccordionLeft>


                    <AccordionLeft class="accordion pt-5" id="solicitudes">
                        <template #title>
                            <h6>Solicitudes de Acceso a la Información</h6>
                        </template>
                        <template #content>
                            <ul class="pl-5 d-flex flex-column ga-2">
                                <li><span class="font-weight-bold">Descripción Del Objetivo Del Servicio: </span>Acceso a la Información Pública generada o administrada por el IPICYT.</li>
                                <li><span class="font-weight-bold">Modalidad del servicio: </span> a) correo electrónico, b) domicilio oficial, c)vía telefónica, d) correo postal, e) mensajería, f)telégrafo, g)verbalmente ante el personal habilitado que las capturará en el sistema electrónico de solicitudes; o cualquier medio aprobado por el Sistema Nacional.</li>
                                <li><span class="font-weight-bold">Requisitos: </span> Los descritos en el artículo 125 de la Ley Federal de Transparencia y Acceso a la Información Pública:<br/><br/>
                                    I. Nombre o, en su caso, los datos generales de su representante;<br/>
                                    II. Domicilio o medio para recibir notificaciones;<br/>
                                    III. La descripción de la información solicitada;<br/>
                                    IV. Cualquier otro dato que facilite su búsqueda y eventual localización, y<br/>
                                    V. La modalidad en la que prefiere se otorgue el acceso a la información, la cual podrá ser verbal, siempre y cuando sea para fines de orientación, mediante consulta directa, mediante la expedición de copias simples o certificadas o la reproducción en cualquier otro medio, incluidos los electrónicos...</li>
                                <li><span class="font-weight-bold">Formatos: </span> <a target="_blank" class="color-secondary link" href="https://www.plataformadetransparencia.org.mx/web/guest/home">https://www.plataformadetransparencia.org.mx/web/guest/home</a></li>
                                <li><span class="font-weight-bold">Monto de los derechos: </span> Gratuito</li>
                                <li><span class="font-weight-bold">Información adicional: </span> <NuxtLink :to="{ name: 'transparencia-acceso-a-la-informacion' }" class="link color-secondary">Acceso a la Información</NuxtLink></li>
                            </ul>
                        </template>
                    </AccordionLeft>

                    <AccordionLeft class="accordion pt-5" id="proteccion-datos-personales">
                        <template #title>
                            <h6>Protección de Datos Personales</h6>
                        </template>
                        <template #content>
                            <ul class="pl-5 d-flex flex-column ga-2">
                                <li><span class="font-weight-bold">Descripción Del Objetivo Del Servicio: </span>Un buen manejo de los Datos Personales de los/las titulares de dichos datos administrados por el IPICYT.</li>
                                <li><span class="font-weight-bold">Modalidad del servicio: </span> a) correo electrónico, b) domicilio oficial, c) vía telefónica, d) correo postal, e) mensajería, f) telégrafo, g) verbalmente ante el personal habilitado que las capturará en el sistema electrónico de solicitudes; o cualquier medio aprobado por el Sistema Nacional.</li>
                                <li><span class="font-weight-bold">Requisitos: </span> Los descritos en el artículo 52 de la Ley General de Protección de Datos Personales en Posesión de los Sujetos Obligados:<br/><br/>
    I. El nombre del titular y su domicilio o cualquier otro medio para recibir notificaciones;<br/>
    II. Los documentos que acrediten la identidad del titular y, en su caso, la personalidad e identidad de su representante;<br/>
    III. De ser posible, el área responsable que trata los datos personales y ante el cual se presenta la solicitud;<br/>
    IV. La descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos ARCO, salvo que se trate del derecho de acceso;<br/>
    V. La descripción del derecho ARCO que se pretende ejercer, o bien, lo que solicita el titular, y<br/>
    VI. Cualquier otro elemento o documento que facilite la localización de los datos personales, en su caso...</li>
                                <li><span class="font-weight-bold">Formatos: </span> <a target="_blank" class="color-secondary link" href="https://www.plataformadetransparencia.org.mx/web/guest/home">https://www.plataformadetransparencia.org.mx/web/guest/home</a></li>
                                <li><span class="font-weight-bold">Monto de los derechos: </span> Gratuito</li>
                                <li><span class="font-weight-bold">Información adicional: </span> <a target="_blank" class="color-secondary link" :href="getAperturaPath('Procedimiento para ejercer los Derechos ARCO.pdf')">Procedimiento Para Ejercer los Derechos ARCO</a></li>
                            </ul>
                        </template>
                    </AccordionLeft>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
.apertura-gubernamental{
    max-width: 609px;
}

.link{
    text-decoration: underline;
    &:hover {
        cursor: pointer;
        font-weight: inherit;
        color: var(--color-black)!important;
        text-decoration: none;
    }
}

.accordion{
    border-top: 1px solid var(--color-gray-light);
}
</style>