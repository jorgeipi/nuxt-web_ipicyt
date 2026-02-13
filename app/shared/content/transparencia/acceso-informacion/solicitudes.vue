<script setup>
import { ButtonLink } from '@components/buttons'
import { dataT3 } from '@data/transparencia/acceso-informacion/transparencia';
import { AccordionLeft, AccordionRight }from "~/shared/components/accordion";

const columnsSolicitudes = [
  { name: 'No', label: 'No' },
  { name: 'Medio de presentación', label: 'Medio de presentación' },
  { name: 'Asunto (temas más recurrentes)', label: 'Asunto (temas más recurrentes)' },
  { name: 'Informe Julio 2023 - Junio 2024', label: 'Informe Julio 2023 - Junio 2024' },
]
</script>

<template>
  <AccordionRight id="solicitudes">
    <template #title>
      <h2>Solicitudes de Acceso a la Información Publica</h2>
    </template>

    <template #content>
      <div>
        <div class="mb-18">
          <h2 class="mb-10">Plataforma Nacional de Transparencia</h2>
          <ButtonLink href='https://www.plataformadetransparencia.org.mx/Inicio' :color="'var(--color-text-subtle)'">
            <p>Plataforma Nacional de Transparencia</p>
          </ButtonLink>
        </div>

        <div class="d-flex flex-column ga-18">
          <AccordionLeft class="accordion-left pt-5" id="b1" group="parent-1">
            <template #title>
              <p class="font-weight-bold">Listado de temas más recurrentes</p>
            </template>

            <template #content>
              <TableGray :columns="columnsSolicitudes" :data="dataT3"  />
            </template>
          </AccordionLeft>

          <AccordionLeft class="accordion-left pt-5" id="b2" group="parent-1">
            <template #title>
              <p class="font-weight-bold">Ruta para Solicitudes de Acceso a la Información</p>
            </template>

            <template #content>
              <div class="left-margin">
                <p class="mb-5">Ingresa a la Plataforma Nacional de Transparencia: <a class="color-secondary"
                    href="https://www.plataformadetransparencia.org.mx/">https://www.plataformadetransparencia.org.mx/</a></p>
                <ol class="pl-5">
                  <li>Dar clic en el botón de Iniciar sesión, si ya cuentas con una cuenta, ingresa con tu usuario y
                    contraseña, si no es así, podrás darte de alta en CREAR CUENTA.</li>
                  <li>Dar clic en Solicitudes opción Acceso a la Información.</li>
                  <li>Llenar el formulario, en el cual podrás escribir tu solicitud.</li>
                  <li>Enviar formulario.</li>
                  <li>Dentro de los próximos 20 días hábiles, recibirás la respuesta de la solicitud de acceso a la
                    información que presentaste.</li>
                </ol>
              </div>

            </template>
          </AccordionLeft>

          <AccordionLeft class="accordion-left pt-5" id="b3" group="parent-1">
            <template #title>
              <p class="font-weight-bold">Proceso para ejercer el Derecho de Acceso a la Información</p>
            </template>

            <template #content>
              <div class="left-margin parrafo d-flex flex-column ga-5">
                <p class="font-weight-bold ">¿Qué es una solicitud de acceso a información pública?</p>
                <p class="">Es un escrito que las personas presentan ante la Unidad de Transparencia del Instituto Potosino de
                  Investigación Científica y Tecnológica, A.C. (IPICYT), por el que pueden requerir el acceso a
                  información
                  pública que se encuentra en documentos que generen, obtengan, adquieran, transformen o conserven en sus
                  archivos. En la generación, publicación y entrega de información se deberá garantizar que ésta sea
                  accesible, confiable, verificable, veraz, oportuna y atenderá las necesidades del derecho de acceso a la
                  información de toda persona</p>
                <p class="font-weight-bold ">¿Quién puede presentar una solicitud de acceso a información pública y ante quién?</p>
                <p class="">Cualquier persona por sí misma o a través de su representante legal.</p>
                <p class="font-weight-bold ">¿Dónde puedo presentar una solicitud de acceso a información pública?</p>
                <p class="">Usted puede presentar una solicitud de información a través de las siguientes vías:</p>
                <ol class="pl-5 ">
                  <li>Por medios electrónicos a través de Internet, utilizando la Plataforma Nacional de Transparencia: <a
                      href="https://www.plataformadetransparencia.org.mx/web/guest/home"
                      class="resalte color-secondary">https://www.plataformadetransparencia.org.mx/web/guest/home</a></li>
                  <li>En este caso, le será asignado automáticamente un número de folio con el que podrá dar seguimiento a
                    su
                    requerimiento.</li>
                  <li>Acudiendo personalmente a la Unidad de Transparencia del sujeto obligado.</li>
                  <li>Por correo electrónico, correo postal, mensajería, telégrafo, verbalmente o cualquier medio aprobado
                    por
                    el Sistema Nacional de Transparencia, dirigido a la Unidad de Transparencia del IPICYT cuya
                    información
                    solicita. Es importante que Usted se quede con un comprobante que acredite la fecha en que presentó su
                    solicitud de acceso a información pública.</li>
                  <li>En la oficina u oficinas designadas para ello.</li>
                </ol>
                <p class="font-weight-bold">¿Cuáles son los requisitos para presentar una solicitud de información?</p>
                <ul class="pl-5">
                  <li>Nombre o, en su caso, los datos generales de su representante (opcional).</li>
                  <li>Domicilio o medio para recibir notificaciones.</li>
                  <li>Descripción de la información solicitada.</li>
                  <li>Cualquier otro dato que facilite su búsqueda (opcional).</li>
                  <li>Modalidad en la que prefiere se otorgue al acceso a la información (verbal - siempre y cuando sea
                    para
                    fines de orientación -, consulta directa, mediante la expedición de copias simples o certificadas o la
                    reproducción en cualquier otro medio, incluidos los electrónicos).</li>
                </ul>
                <p class="font-weight-bold">¿Cuántos días tiene el IPICYT para responder una solicitud?</p>
                <p>La respuesta a la solicitud deberá ser notificada al interesado en el menor tiempo posible, que no
                  podrá
                  exceder de 20 días, contados a partir del día siguiente a la presentación de aquélla. Excepcionalmente,
                  el
                  plazo referido podrá ampliarse hasta por 10 días más, siempre y cuando existan razones fundadas y
                  motivadas.
                </p>
                <p>En caso de que la información solicitada no pueda entregarse o enviarse en la modalidad elegida por el
                  solicitante, el IPICYT deberá ofrecer otra u otras modalidades de entrega.</p>
                <p>Si una solicitud no es respondida en el plazo previsto, en caso de que proceda el acceso, los costos de
                  reproducción y envío correrán a cargo del IPICYT.</p>
                <p>En caso de el IPICYT no otorguen una respuesta a su solicitud, el Instituto Nacional de Transparencia,
                  Acceso a la Información y protección de Datos Personales (Transparencia para el Pueblo) podrá intervenir
                  si Usted presenta un
                  recurso de revisión.</p>
                <p>Para más información, puede consultar: <a href="https://home.inai.org.mx/?page_id=1643" class="color-secondary">https://home.inai.org.mx/?page_id=1643</a></p>
              </div>
            </template>
          </AccordionLeft>
        </div>
      </div>
    </template>
  </AccordionRight>
</template>

<style lang="scss" scoped>

.accordion-left {
  border-top: 1px solid var(--color-gray-light);
}

</style>