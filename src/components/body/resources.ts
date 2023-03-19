export const _attributes: IAttributes[] = [
  {
    icon: "/images/custom.png",
    title: "Personalización",
    content: "En Exoprime, nunca empujamos a nuestros clientes a programas de limpieza predeterminados. Más bien, adaptamos nuestros programas para garantizar que abordamos los objetivos de limpieza específicos de cada cliente."
  },
  {
    icon: "/images/communication.png",
    title: "Comunicación",
    content: "Siempre queremos saber de nuestros clientes y asegurarnos de que estamos abordando plenamente sus necesidades. Como tal, facilitamos la comunicación directa con Mint Condition."
  },
  {
    icon: "/images/tecnology.png",
    title: "Tecnología",
    content: "Todos nuestros equipos de limpieza están equipados con la tecnología necesaria para mantener las instalaciones comerciales ordenadas, sanitarias y desinfectadas."
  },
  {
    icon: "/images/quality.png",
    title: "Calidad",
    content: "Por aquí, nos gusta decir: “Inspeccionamos lo que esperamos”. En otras palabras, sometemos cada sitio de limpieza a los más altos estándares de control de calidad."
  },
]

export const _services: IServices[] = [
  {
    title: 'Oficinas Comerciales',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit et risus eu tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit et risus eu tempor.',
    image: '/images/oficinas.png',
    tag: 'oficinas'
  },
  {
    title: 'Industrias',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit et risus eu tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit et risus eu tempor.',
    image: '/images/industrias.png',
    tag: 'industrias'
  },
  {
    title: 'Entidades Financieras',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit et risus eu tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit et risus eu tempor.',
    image: '/images/entidades.png',
    tag: 'entidades'
  },
  {
    title: 'Instalaciones médicas',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit et risus eu tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit et risus eu tempor.',
    image: '/images/instalaciones.png',
    tag: 'instalaciones'
  },
  {
    title: 'Obras de Construcción',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit et risus eu tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit et risus eu tempor.',
    image: '/images/obras.png',
    tag: 'obras'
  },
]
export const _values: IValues[] = [
  {
    title: 'Visión',
    description: 'Creemos en los procesos respetuosos con el medio ambiente, envases reciclados y estamos totalmente en contra de las pruebas en animales. Es donde a partir de aquí tenemos un ideal para cada persona que use nuestros productos, sentirse libre de decir que respeta a la naturaleza al 100%.'
  },
  {
    title: 'Misión',
    description: 'Nuestra misión como empresa ecológica es lograr que tanto personas como otras empresas logren tomar conciencia de los productos que hacen daño a nuestro planeta.'
  },
  {
    title: 'Objetivos',
    description: 'Tenemos como objetivo cambiar la industria de la belleza a una industria más consciente con respecto a la manera de elaborar los productos vendidos.'
  },
]

export interface IAttributes {
  icon: string,
  title: string,
  content: string
} 

export interface IServices {
  image: string,
  title: string,
  content: string,
  tag: string
}

export interface IValues {
  title: string,
  description: string
}