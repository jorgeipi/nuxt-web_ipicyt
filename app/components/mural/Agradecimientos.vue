<script setup>
const nombres = [
    "Abraham Escobedo Moratilla",
    "Alain Jesús Aguirre Vázquez",
    "Alejandro De Las Peñas Nava",
    "Alejandro Medina Sánchez",
    "Alejandro Vázquez Bulman",
    "Alexis Alberto Pérez Cham",
    "Alicia Becerra Flora",
    "Ángel Gabriel Alpuche Solís",
    "Ángel Josabad Alonso Castro",
    "Armando Encinas Oropesa",
    "Bernardo Bañuelos Hernández",
    "Blanca Estela Rodríguez Coronado",
    "Carlos Medina Garcés",
    "Carolina Gómez Banuet",
    "Cinthya Guadalupe Segura Luna",
    "Clara de la Luz Carreón Alvarez",
    "Diana Karime Olmos Hernández",
    "Elisabeth Huber-Sannwald",
    "Eloy Ruelas Santa Cruz",
    "Elvia Leticia Capetillo Montejano",
    "Elvira del Carmen Arellanes Licea",
    "Eric Campos Cantón",
    "Esaú Bojórquez Velázquez",
    "Eva Hayde Ramos Flores",
    "Fausto Iván Vázquez Ruiz",
    "Florecita de la Asunción Martínez Salazar",
    "Gabriela Pérez Assaf",
    "Gerardo Rafael Argüello Astorga",
    "Gilberto Arturo González Murguía",
    "Giovanna Viridiana Rodríguez Maldonado",
    "Guadalupe Medina de la Rosa",
    "Guillermo Juárez Vega",
    "Guillermo Vidriales Escobar",
    "Haret Codratian Rosu Barbus",
    "Irene Beatriz Castaño Navarro",
    "J. Sergio Casas Flores",
    "Jacqueline Juárez Cepeda",
    "Janete Morán Ramírez",
    "Jesús Leyva Ramos",
    "Jonathan Williams Luévano Galván",
    "Jorge Carlos Navarro Muñoz",
    "José Alfredo Ramos Leal",
    "José Ángel Trujillo Isacc",
    "José Luis Morán López",
    "Juan Carlos Ramírez Zambrano",
    "Juan Carlos Rosas Cabrera",
    "Juan Francisco Jiménez Bremont",
    "Juan Gonzalo Barajas Ramírez",
    "Laura Evelia Martínez Melo",
    "Leonardo Chapa Vargas",
    "Lina Raquel Riego Ruiz",
    "Lorena Sánchez Higueredo",
    "Luis Antonio Salazar Olivo",
    "Luis Fernando Herrera Bejarano",
    "Luisa Eugenia Hernández Arteaga",
    "Luz Alexia Rivera Hernandez",
    "Luz María García Hernández",
    "Ma. del Rocío Perales Ruiz",
    "Ma. Felicitas Martínez Aparicio",
    "Marbella Chávez Solano",
    "María de los Ángeles Bohórquez Quintero",
    "María de Lourdes de Blas Rodríguez",
    "María del Pilar Sánchez Bribiesca",
    "María Fernanda Escamilla Jaspersen",
    "María Guadalupe Gómez Espinoza",
    "Mario Alberto Solano Saldaña",
    "Mayra Berenice Lara Rodríguez",
    "Mayra Cuéllar Cruz",
    "Mayra Janeth Esparza Araiza",
    "Mayté Guadalupe Cervantes Badillo",
    "Melissa Archuleta Flores",
    "Mireya Liliana Herrera Herrera",
    "Mireya Sánchez Garza",
    "Miriam Livier Llamas García",
    "Miriam Nathaly Jiménez Rodríguez",
    "Nancy Verónica Pérez Aguilar",
    "Nguyen Esmeralda López Lozano",
    "Nicolás Gómez Hernández",
    "Noemi Arambula García",
    "Norma Angélica Acosta Guerrero",
    "Norma Angélica Aguilar Morales",
    "Norma Concepción Vázquez Franco",
    "Ofelia Rico Soto",
    "Pablo Dávila Harris",
    "Pedro Gutiérrez García",
    "Rosa María Fuentes Rivas",
    "Rubén Eduardo Gutiérrez Galicia",
    "Salvador Ambriz Granados",
    "Samuel Lara González",
    "Sanjeet Kumar Verma",
    "Silvia María Flores Dueñez",
    "Sonia Lorena Arriaga García",
    "Susana Madrigal Ortiz",
    "Ulises Rodrigo Morales Salcedo",
    "Verónica Zárate Chávez",
    "Yadira Díaz Arzola"
];

const nombresOrdenados = [...nombres].sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));

const columna1 = nombresOrdenados.slice(0, 32);
const columna2 = nombresOrdenados.slice(32, 64);
const columna3 = nombresOrdenados.slice(64);
</script>

<template>
    <div class="mural--agradecimientos_list">
        <div class="columna" v-for="(columna, index) in [columna1, columna2, columna3]" :key="index">
            <div class="nombre-item" v-for="(nombre, i) in columna" :key="i">
                {{ nombre }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.mural--agradecimientos_list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 20px 0;
}

.columna {
    // padding: 15px;
}

// .nombre-item {
//     padding: 8px 12px;
//     margin-bottom: 8px;
//     background: #f8f9fa;
//     border-radius: 4px;
//     border-left: 3px solid #3498db;
// }

.nombre-item{
    color: #575656;
font-family: "Noto Sans";
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 146.667% */
}

@media (max-width: 992px) {
    .mural--agradecimientos_list {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 576px) {
    .mural--agradecimientos_list {
        grid-template-columns: 1fr;
    }
}
</style>