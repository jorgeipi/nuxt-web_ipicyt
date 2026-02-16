<script setup lang="ts">
const dataT1= [
        ["9:00 a.m. a 17:00 p.m.", "+1 (444) 8 34 20 00 Ext. 2018 y 3216", "umorales@ipicyt.edu.mx", "Camino a la Presa San José No. 2055 ", "C.P.C. Ulises Rodrigo Morales Salcedo", "Titular de la Unidad de Transparencia"]
]
</script>

<template>
    <section>
        <TitleOverline class="mb-8">
            <h2>Unidad de Transparencia</h2>
        </TitleOverline>

        <TableGray>
            <template #thead>
                <tr>
                    <th>Horario de atención de la Unidad de Transparencia</th>
                    <th>Teléfono y extensión</th>
                    <th>Correo electrónico Oficial</th>
                    <th>Domicilio Oficial de la Unidad de Transparencia</th>
                    <th>Nombre del Responsable de atención y operación de la Unidad de Transparencia</th>
                    <th>Cargo o función en la Unidad de Transparencia</th>
                </tr>
            </template>
            <template #tbody>
                <tr>
                    <td data-label="Horario de atención de la Unidad de Transparencia">{{ dataT1[0][0] }}</td>
                    <td data-label="Teléfono y extensión">{{ dataT1[0][1] }}</td>
                    <td data-label="Correo electrónico Oficial">{{ dataT1[0][2] }}</td>
                    <td data-label="Domicilio Oficial de la Unidad de Transparencia">{{ dataT1[0][3] }}</td>
                    <td data-label="Nombre del Responsable de atención y operación de la Unidad de Transparencia">{{ dataT1[0][4] }}</td>
                    <td data-label="Cargo o función en la Unidad de Transparencia">{{ dataT1[0][5] }}</td>
                </tr>
            </template>
        </TableGray>
    </section>
</template>