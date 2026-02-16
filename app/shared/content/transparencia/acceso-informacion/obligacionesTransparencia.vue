<script setup>
import { getAccesoInfoDenunciasPath } from '@shared/helpers/transparencia/getPath'

const meses = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
];

const dataDenuncias = meses.map((mes, index) => ({
  no: (index + 1).toString(),
  anio: '2025',
  numeroIdentificacion: '',
  objetoDenuncia: '',
  sentidoResolucion: '',
  documentoDenuncia: '',
  fechaResolucion: '',
  nota: `En el mes de ${mes}, Transparencia para el Pueblo no emitió ninguna resolución sobre denuncias presentadas contra este Instituto Potosino de Investigación Científica y Tecnológica, A.C.`
}));
</script>

<template>
    <AccordionRight id="obligaciones-transparencia">
        <template #title>
            <h2>Obligaciones de Trasparencia</h2>
        </template>

        <template #content>

            <div class="d-flex flex-column ga-18">
                <div><p>Aquí podrás consultar el directorio, currícula de personas servidoras
                        públicas, contrataciones, sueldos, presupuestos, entre otra información
                        del Intituto Potosino de Investigación Científica y Tecnológica, A.C</p>
                    <ButtonLink class="mt-5" :color="'var(--color-text-subtle)'"
                        href="https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/faces/view/consultaPublica.xhtml#inicio">
                        <p>Sistema de Portales de Obligaciones de Transparencia IPICYT</p>
                    </ButtonLink>
                </div>

                <div class="d-flex flex-column ga-5">
                    <h2>Obligaciones de Trasparencia</h2>
                    <p>Consulta las denuncias presentadas por las personas ante el Instituto
                        Nacional de Transparencia, Acceso a la Información y Protección de Datos
                        Personales (Transparencia para el Pueblo) en contra del Instituto Potosino de Investigación
                        Científica y Tecnológica, A.C. (IPICYT) por incumplimiento y/o por falta
                        de actualización de las Obligaciones de Transparencia previstas en los
                        artículos 70 a 83 de la Ley General de Transparencia y Acceso a la
                        Información Pública y 69 a 76 de la Ley Federal de Transparencia y Acceso
                        a la Información Pública desde el año 2021.</p>

                    <div class="d-flex flex-wrap ga-5">
                        <ButtonLink :color="'var(--color-text-subtle)'"
                            :href="getAccesoInfoDenunciasPath('Denuncias 2021.xlsx')">
                            <p>Denuncias Ejercicio 2021</p>
                        </ButtonLink>

                        <ButtonLink :color="'var(--color-text-subtle)'"
                            :href="getAccesoInfoDenunciasPath('Denuncias_2022.xlsx')">
                            <p>Denuncias Ejercicio 2022</p>
                        </ButtonLink>

                        <ButtonLink :color="'var(--color-text-subtle)'"
                            :href="getAccesoInfoDenunciasPath('Denuncias_2023.xlsx')">
                            <p>Denuncias Ejercicio 2023</p>
                        </ButtonLink>

                        <ButtonLink :color="'var(--color-text-subtle)'"
                            :href="getAccesoInfoDenunciasPath('Denuncias_2024.xlsx')">
                            <p>Denuncias Ejercicio 2024</p>
                        </ButtonLink>

                        <ButtonLink :color="'var(--color-text-subtle)'"
                            :href="getAccesoInfoDenunciasPath('Denuncias tecer trimestre 2025.xlsx')">
                            <p>Denuncias tecer trimestre 2025</p>
                        </ButtonLink>

                        <ButtonLink :color="'var(--color-text-subtle)'"
                            :href="getAccesoInfoDenunciasPath('Denuncias cuarto trimestre 2025.xlsx')">
                            <p>Denuncias cuarto trimestre 2025</p>
                        </ButtonLink>
                    </div>
                </div>

                <div>
                    <p><span class="font-weight-bold">Denuncias ejercicio 2025</span><a class="color-secondary" :href="getAccesoInfoDenunciasPath(`Denuncias_2025.xlsx`)">(descargar tabla)</a></p>
                    <!-- <TableGray class="small" :columns="columnsDenuncias" :data="dataDenuncias" /> -->
                    <TableGray>
                        <template #thead>
                            <tr>
                                <th>No.</th>
                                <th>Año</th>
                                <th>Número de identificación de la denuncia</th>
                                <th>Objeto de la denuncia</th>
                                <th>Sentido de la resolución emitida por el Transparencia para el Pueblo</th>
                                <th>Documento de la denuncia</th>
                                <th>Fecha en que fue emitida la resolución del Transparencia para el Pueblo (día/mes/año)</th>
                                <th>Nota</th>
                            </tr>
                        </template>
                        <template #tbody>
                            <tr v-for="(row, index) in dataDenuncias" :key="index">
                                <td>{{ row.no }}</td>
                                <td>{{ row.anio }}</td>
                                <td>{{ row.numeroIdentificacion }}</td>
                                <td>{{ row.objetoDenuncia }}</td>
                                <td>{{ row.sentidoResolucion }}</td>
                                <td>{{ row.documentoDenuncia }}</td>
                                <td>{{ row.fechaResolucion }}</td>
                                <td>{{ row.nota }}</td>
                            </tr>
                        </template>
                    </TableGray>
                </div>

            </div>
        </template>
    </AccordionRight>
</template>

<style lang="scss" scoped>
.small {
    font-size: 12px!important;
}
</style>