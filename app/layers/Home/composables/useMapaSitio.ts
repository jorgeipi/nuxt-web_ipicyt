// layers/home/composables/useMapaSitio.ts
import { ref } from 'vue'

// Importar todas las imágenes
import investigacionImg from '~/assets/images/inicio/investigacion.png'
import posgradoImg from '~/assets/images/inicio/posgrado.png'
import laboratorioImg from '~/assets/images/inicio/laboratorio.png'
import interinstitucionalesImg from '~/assets/images/inicio/interinstitucionales.png'
import hover1Img from '~/assets/images/inicio/hover_1.png'

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
      image: investigacionImg,  // ← Ahora es la referencia importada
      hoverImage: hover1Img,
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
        '/',
        '/',
        '/',
        '/',
        '/'
      ]
    },
    {
      title: 'Posgrados',
      href: '/',
      image: posgradoImg,
      hoverImage: hover1Img,
      alt: 'Posgrados',
      text: 'Doctorados, maestrías, diplomados, cursos, talleres, convocatorias, becas, torneos deportivos, congresos, consejo estudiantil, directorio de alojamiento y más.',
      extra_text: ['bmm', 'ca', 'csd', 'ga', 'ma', 'ea', 'd']
    },
    {
      title: 'Laboratorios Nacionales',
      href: '#',
      image: laboratorioImg,
      hoverImage: hover1Img,
      alt: 'Laboratorios Nacionales',
      text: 'Para academia e industria',
      extra_text: ['cns', 'lanbama', 'linan'],
      list: [
        '<span class="bold">CNS:</span> Centro Nacional de Supercómputo',
        '<span class="bold">LANBAMA:</span> Laboratorio Nacional de Biotecnología Agrícola, Médica y Ambiental',
        '<span class="bold">LINAN:</span> Laboratorio Nacional de Investigaciones en Nanociencias y Nanotecnología'
      ],
      listUrl: [
        '/',
        '/',
        '/'
      ]
    },
    {
      title: 'Grupos de trabajo interinstitucionales',
      href: '#',
      image: interinstitucionalesImg,
      hoverImage: hover1Img,
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
        '/',
        '/',
        '/',
        '/'
      ]
    }
  ])

  return {
    items
  }
}