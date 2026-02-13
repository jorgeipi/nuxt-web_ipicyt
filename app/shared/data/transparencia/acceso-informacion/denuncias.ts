const meses = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
];

export const dataDenuncias = meses.map((mes, index) => ({
  no: (index + 1).toString(),
  anio: '2025',
  numeroIdentificacion: '',
  objetoDenuncia: '',
  sentidoResolucion: '',
  documentoDenuncia: '',
  fechaResolucion: '',
  nota: `En el mes de ${mes}, Transparencia para el Pueblo no emitió ninguna resolución sobre denuncias presentadas contra este Instituto Potosino de Investigación Científica y Tecnológica, A.C.`
}));

export const columnsDenuncias = [
  { key: 'no', label: 'No.' },
  { key: 'anio', label: 'Año' },
  { key: 'numeroIdentificacion', label: 'Número de identificación de la denuncia' },
  { key: 'objetoDenuncia', label: 'Objeto de la denuncia' },
  { key: 'sentidoResolucion', label: 'Sentido de la resolución emitida por el Transparencia para el Pueblo' },
  { key: 'documentoDenuncia', label: 'Documento de la denuncia' },
  { key: 'fechaResolucion', label: 'Fecha en que fue emitida la resolución del Transparencia para el Pueblo (día/mes/año)' },
  { key: 'nota', label: 'Nota' }
];