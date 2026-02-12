<template>
    <div class="departamentos">
        <p class="departamentos__subtitle mb-3"><strong>Departamento de Posgrado</strong></p>
        <p class="mb-3">
            Atiende la administración escolar del Posgrado, que consiste en planear, organizar y coordinar los procesos
            académico administrativos que, bajo la regulación del Posgrado Institucional, son requeridos para el buen
            desempeño administrativo escolar. Su operación requiere el manejo de una agenda de actividades que abarca la
            colaboración con instancias externas para dar cumplimiento a la normatividad del Posgrado como la SECIHTI y
            la SEP, así como el desarrollo de actividades y programas sustantivos como: Control Escolar, Seguimiento a
            Graduadas y Graduados, Promoción Institucional e Inglés.
        </p>
        <p class="departamentos__subtitle mb-3"><strong>Departamento de Biblioteca</strong></p>
        <p class="mb-3">Este Departamento desempeña un papel fundamental en el impulso de las actividades de investigación tanto de
            las Divisiones Académicas como de los Posgrados Institucionales. Dado que la información constituye un
            elemento indispensable para la realización de investigación científica y tecnológica, el acceso a los
            acervos físicos y digitales se posiciona como una herramienta estratégica de gran relevancia.</p>
        <p class="departamentos__subtitle mb-3"><strong>Seguimiento Académico</strong></p>
        <p class="mb-3">
            Esta área monitorea el progreso y desempeño del personal académico, estudiantil, de los proyectos y de otras
            actividades académicas desarrolladas la institución. Sus tareas abarcan desde:</p>
        <ul class="departamentos__list pl-5">
            <li>Garantizar el cumplimiento de los planes de trabajo y de las normativas
                institucionales.</li>
            <li>Analizar indicadores institucionales.</li>
            <li>Organizar la información y elaborar reportes de desempeño institucional.
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
    .departamentos{
        &__subtitle{
            font-size: 1.4rem;
        }

        &__list{
            list-style-type: lower-alpha;
            
            li::marker {
                font-weight: bold;
            }
        }
    }
</style>