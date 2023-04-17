export const _attributes: IAttributes[] = [
  {
    icon: "/images/custom.png",
    title: "Customization",
    content: "At Exoprime, we never push our customers into predetermined cleaning programs. Rather, we tailor our programs to ensure that we address each client's specific cleaning objectives."
  },
  {
    icon: "/images/communication.png",
    title: "Communication",
    content: "We always want to hear from our customers and ensure that we are fully addressing their needs. As such, we facilitate direct communication with Mind Condition."
  },
  {
    icon: "/images/tecnology.png",
    title: "Tecnology",
    content: "All our cleaning equipment is equipped with the necessary technology to keep commercial facilities tidy, sanitary and disinfected."
  },
  {
    icon: "/images/quality.png",
    title: "Quality",
    content: 'Around here, we like to say, "We inspect what we expect." In other words, we hold each cleaning site to the highest standards of quality control.'
  },
]

export const _services: IServices[] = [
  {
    title: 'Home maintenance',
    content: 'We provide home maintenance services, cleaning any artifacts and areas that annoy you!, such as:',
    image: '/images/oficinas.png',
    tag: 'homemaintenance',
    list: [
      'Air Coditioning',
      'Electricity',
      'Paint',
      'Plumbing',
    ]
  },
  {
    title: 'Cleaning',
    content: "The dirty work, we know how cumbersome it can be, many times we don't start things because we think about how dirty it will end up, but with us you don't have to worry!",
    image: '/images/industrias.png',
    tag: 'cleaning',
    list: [
      'Post construction cleaning',
      'Residential cleaning services',
      'Commercial cleaning services',
      'Financial Institutions cleaning services',
      'Medical Facilities cleaning services',
     
    ]
  },
  // {
  //   title: 'Entidades Financieras',
  //   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit et risus eu tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit et risus eu tempor.',
  //   image: '/images/entidades.png',
  //   tag: 'entidades'
  // },
  // {
  //   title: 'Instalaciones médicas',
  //   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit et risus eu tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit et risus eu tempor.',
  //   image: '/images/instalaciones.png',
  //   tag: 'instalaciones'
  // },
  // {
  //   title: 'Obras de Construcción',
  //   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit et risus eu tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit et risus eu tempor.',
  //   image: '/images/obras.png',
  //   tag: 'obras'
  // },
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
  tag: string,
  list?: string[]
}

export interface IValues {
  title: string,
  description: string
}