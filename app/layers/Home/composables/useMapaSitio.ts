// layers/home/composables/useMapaSitio.ts
import { ref } from 'vue'

export interface MapaSitioItem {
  title: string
  href: string
  image: string
  hoverImage: string
  alt: string
  text: string
  extra_text: string[]
  list?: string[]
  listUrl?: string[]
}

export const useMapaSitio = () => {
  const items = ref<MapaSitioItem[]>([
    {
      title: 'Investigación',
      href: '/investigacion',
      image: '/imgs/inicio/investigacion.png',
      hoverImage: '/imgs/inicio/hover_1.png',
      alt: 'Divisiones de Investigación',
      text: 'A esto nos dedicamos',
      extra_text: ['dmb', 'dca', 'dcsd', 'dga', 'dma'],
      list: [
        'Biología Molecular',
        'Ciencias Ambientales',
        'Control y Sistemas Dinámicos',
        'Geociencias Aplicadas',
        'Materiales Avanzados'
      ],
      listUrl: [
        '/biologia-molecular',
        '/ciencias-ambientales',
        '/control-y-sistemas-dinamicos',
        '/geociencias-aplicadas',
        '/materiales-avanzados'
      ]
    },
    {
      title: 'Posgrados',
      href: '/posgrado/programas-posgrado',
      image: '/imgs/inicio/posgrado.png',
      hoverImage: '/imgs/inicio/hover_1.png',
      alt: 'Posgrados',
      text: 'Doctorados, maestrías, diplomados, cursos, talleres, convocatorias, becas, torneos deportivos, congresos, consejo estudiantil, directorio de alojamiento y más.',
      extra_text: ['bmm', 'ca', 'csd', 'ga', 'ma', 'ea', 'd']
    },
    {
      title: 'Laboratorios Nacionales',
      href: '#',
      image: '/imgs/inicio/laboratorio.png',
      hoverImage: '/imgs/inicio/hover_1.png',
      alt: 'Laboratorios Nacionales',
      text: 'Para academia e industria',
      extra_text: ['cns', 'lanbama', 'linan'],
      list: [
        '<span class="bold">CNS:</span> Centro Nacional de Supercómputo',
        '<span class="bold">LANBAMA:</span> Laboratorio Nacional de Biotecnología Agrícola, Médica y Ambiental',
        '<span class="bold">LINAN:</span> Laboratorio Nacional de Investigaciones en Nanociencias y Nanotecnología'
      ],
      listUrl: [
        '/laboratorioCNS',
        '/laboratorioLANBAMA',
        '/laboratorioLINAN'
      ]
    },
    {
      title: 'Grupos de trabajo interinstitucionales',
      href: '#',
      image: '/imgs/inicio/interinstitucionales.png',
      hoverImage: '/imgs/inicio/hover_1.png',
      alt: 'interinstitucionales',
      text: 'Para academia e industria',
      extra_text: ['cns', 'lanbama', 'linan', 'linan'],
      list: [
        'Grupo de Ciencia e Ingeniería Computacionales',
        'Arsenic Research and Action Network',
        'Laboratorio Extramuros',
        'Red Internacional para la Sostenibilidad de las Zonas Áridas'
      ],
      listUrl: [
        '/cienciaIngenieria',
        '/arsenic',
        '/lemur',
        '/risza'
      ]
    }
  ])

  return {
    items
  }
}