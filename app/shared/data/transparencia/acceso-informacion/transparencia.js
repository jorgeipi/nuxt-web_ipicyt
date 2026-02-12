const basePath = import.meta.env.VITE_IMG_PATH_SOURCE + '/transparencia/accesoInformacion'
const dataT1= [
        ["9:00 a.m. a 17:00 p.m.", "+1 (444) 8 34 20 00 Ext. 2018 y 3216", "umorales@ipicyt.edu.mx", "Camino a la Presa San José No. 2055 ", "C.P.C. Ulises Rodrigo Morales Salcedo", "Titular de la Unidad de Transparencia"]
      ]
const dataT2= [
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
          cargo:"Titular de la Oficina de Representación del Órgano Interno de Control en el SECIHTI en el IPICYT",
          cargoComite: "Integrante del Comité de Transparencia",
          correo: "arturo.avila@ipicyt.edu.mx",
          telefono: "444 8342000 Ext. 2008",
          direccion:"Camino a la Presa a San José No. 2055, Lomas 4ª Sección, San Luis Potosí, S.L.P., Edificio de Administración.",
        },
        {
          nombre: "Lic. Erick Ríos Díaz",
          cargo:
            "Titular del Área de Responsabilidades Unidad Administrativa del Órgano Interno de Control Específico en el SECIHTI en el IPICYT",
          cargoComite: "Integrante del Comité de Transparencia",
          correo: "erick.rios@ipicyt.edu.mx",
          telefono: "444 8342000 Ext. 7320",
          direccion:"Camino a la Presa a San José No. 2055, Lomas 4ª Sección, San Luis Potosí, S.L.P., Edificio de Administración.",
        },
      ]
const  dataT3= [[
        "1",
        "Solicitudes de Acceso a la Información-Plataforma Nacional de Transparencia",
        "Relacionado con la compra de medicamentos",
        '<a href="' + basePath + '/Listado_de_consultas_recurrentes.pdf" class="resalte">Listado_de_consultas_recurrentes</a>'
      ]
      ]

export {
    dataT1,
    dataT2,
    dataT3
}