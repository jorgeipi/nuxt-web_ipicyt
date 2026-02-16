<script setup lang="ts">
const dataT2 = [
    {
        nombre: "C.P.C. Ulises Rodrigo Morales Saucedo",
        cargo: "Titular de la Unidad de Administracion y Finanzas",
        cargoComite: "Presidente del Comité de Transparencia",
        correo: "unmorales@ipicyt.edu.mx",
        telefono: "444 8342000 Ext. 2018 o Ext. 3216",
        direccion:
            "Camino a la Presa a San José No. 2055, Lomas 4ª Sección, San Luis Potosí, S.L.P., Edificio de Administración.",
    },
    {
        nombre: "Lic. Iris Paola Soto Flores",
        cargo: "Responsable del Área Coordinadora de Archivos",
        cargoComite: "Integrante del Comité de Transparencia",
        correo: "iris.soto@ipicyt.edu.mx",
        telefono: "444 8342000 Ext. 3216",
        direccion:
            "Camino a la Presa a San José No. 2055, Lomas 4ª Sección, San Luis Potosí, S.L.P., Edificio de Administración.",
    },
    {
        nombre: "C.P. Arturo Ávila Esparza",
        cargo: "Titular de la Oficina de Representación del Órgano Interno de Control en el SECIHTI en el IPICYT",
        cargoComite: "Integrante del Comité de Transparencia",
        correo: "arturo.avila@ipicyt.edu.mx",
        telefono: "444 8342000 Ext. 2008",
        direccion: "Camino a la Presa a San José No. 2055, Lomas 4ª Sección, San Luis Potosí, S.L.P., Edificio de Administración.",
    },
    {
        nombre: "Lic. Erick Ríos Díaz",
        cargo:
            "Titular del Área de Responsabilidades Unidad Administrativa del Órgano Interno de Control Específico en el SECIHTI en el IPICYT",
        cargoComite: "Integrante del Comité de Transparencia",
        correo: "erick.rios@ipicyt.edu.mx",
        telefono: "444 8342000 Ext. 7320",
        direccion: "Camino a la Presa a San José No. 2055, Lomas 4ª Sección, San Luis Potosí, S.L.P., Edificio de Administración.",
    },
]
</script>

<template>
    <section>
        <TitleOverline class="mb-8">
            <h2>Comité de Transparencia</h2>
        </TitleOverline>

        <TableGray>
            <template #thead>
                <tr>
                    <th>Nombre</th>
                    <th>Cargo</th>
                    <th>Cargo en Comité</th>
                    <th>Correo Electrónico</th>
                    <th>Teléfono</th>
                    <th>Dirección</th>
                </tr>
            </template>
            <template #tbody>
                <tr v-for="(row, i) in dataT2" :key="i">
                    <td data-label="Nombre">{{ row.nombre }}</td>
                    <td data-label="Cargo">{{ row.cargo }}</td>
                    <td data-label="Cargo en Comité">{{ row.cargoComite }}</td>
                    <td data-label="Correo Electrónico">{{ row.correo }}</td>
                    <td data-label="Teléfono">{{ row.telefono }}</td>
                    <td data-label="Dirección">{{ row.direccion }}</td>
                </tr>
            </template>
        </TableGray>
    </section>
</template>