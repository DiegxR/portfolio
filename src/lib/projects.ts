import { Project } from "@/types/proyects";

export const projectsArray: Project[] = [
  {
    name: "Blooma io",
    description:
      "Gestor de proyectos de diseño y desarrollo tanto para empresas como para freelance donde encontrarás todo lo necesario para tus trabajos, proyectos y ofertas",
    details: [
      {
        images: [
          "https://drive.google.com/uc?id=1nRSDYp8b3XlIeE0hFpqN5nUHGqLIPt98",
          "https://drive.google.com/uc?id=1jfomrgZP_fICaHGhsi-ma6g8d8uwE5VG",
          "https://drive.google.com/uc?id=1Mht41E_j0FmPfKE046vMWUNcxpv9WA5B",
          "https://drive.google.com/uc?id=18smtFNcx3FCSswBQuH3mf9imrp8KOepf",
        ],
        title: "General",
        description:
          "Descripción: Blooma es una iniciativa lanzada por Norvik startup que pretende reunir en una sola plataforma un entorno donde clientes pueden subir y gestionar sus proyectos y a la vez puedes contactar con diseñadores y desarrolladores publicando proyectos y recibiendo propuestas de desarrollo a través de un sistema de créditos",
        icons: [
          { icon: "icon-[cib--next-js]", name: "Next Js" },
          { icon: "icon-[fontisto--react]", name: "Zustand" },
        ],
        link: "https://app-qa.blooma.io",
        tag: "",
      },
      {
        images: [
          "https://drive.google.com/uc?id=1OsyFTIk6uptfbzCABEB2YuWCGXy76BfZ",
          "https://drive.google.com/uc?id=1ZBkS4gRAkxh_kgBCiQ4UerGPVOAwI4cG",
          "https://drive.google.com/uc?id=16idaKBmIv7Qz_mFKbhqMEuCrNF4cyx7o",
          "https://drive.google.com/uc?id=1Jw5Rb1-v2X0IzM5GTdHM3R3OwjEWjWtH",
        ],

        title: "Integraciones",
        description:
          "Desarrollo Front-End para Plataforma de Gestión de Proyectos En este proyecto, me encargué del diseño y desarrollo utilizando Next UI para los componentes de la interfaz, Tailwind CSS para la estilización y Framer Motion para animaciones interactivas. Maqueté pantallas clave como BrandKit, enfocándome en la estética y funcionalidad. Además, implementé secciones para gestionar miembros y archivos de proyectos, facilitando la colaboración en equipo y la organización de recursos para la plataforma.",

        icons: [
          { icon: "icon-[cib--next-js]", name: "Next Ui" },
          { icon: "icon-[devicon--tailwindcss]", name: "Tailwind Css" },
          { icon: "icon-[devicon--framermotion]", name: "Framer Motion" },
        ],
        link: "https://api.blooma.io/auth/api-docs",
        tag: "FrontEnd",
      },
      {
        images: [
          "https://drive.google.com/uc?id=1b4Hct-gWTMuyDsyYs222jM6lIaV1gN1V",
          "https://drive.google.com/uc?id=1IpACbPLs42wkiV2pZ-eEwl6OusnjidN3",
          "https://drive.google.com/uc?id=1vvdRYAcbxLppcv_jpoWytI5S9oxaFPEY",
          "https://drive.google.com/uc?id=1Jw5Rb1-v2X0IzM5GTdHM3R3OwjEWjWtH",
        ],
        title: "Autenticación",
        description:
          "Cómo logro personal destacado en esta plataforma he liderado la creación del servicio de autenticación hecho con Nest Js, usando JSON Web Token para seguirdad en cada uno de los enpoints y verificación de correos, verificación de cuentas y otp con envíos automaticos de emails usando Resend, también se implementa autenticación con Google directamente de su api, también se implentó la plataforma de pagos con Stripe la cuál asigna créditos al usuario los cuales se podrán usar dentro de la plataforma y se renovarán dependiendo del plan adquirido",
        icons: [
          { icon: "icon-[devicon--nestjs]", name: "Nest Js" },
          { icon: "icon-[logos--stripe]", name: "Stripe" },
          { icon: "icon-[logos--jwt-icon]", name: "Jwt" },
        ],
        link: "https://api.blooma.io/auth/api-docs",
        tag: "BackEnd",
      },
    ],
    tags: ["FrontEnd", "BackEnd"],
  },
  {
    name: "LatamVerify",
    description:
      "Plataforma para consulta de antecedentes y diferentes reportes de más de 16 países en Latam",
    details: [
      {
        images: [
          "https://drive.google.com/uc?id=1jtrzmSKeHpDzImbgXCHedR9ZC1JTuGCe",
        ],
        title: "General",
        description:
          "En esta plataforma estuve trabajando en hacer consultas a más de 20 enpoints diferentes buscando coincidencias de antecedentes por número de documento o nombre, maquetando diferentes vistas para coincidencias por nombre y coincidencias en alguno de los endpoints",
        icons: [
          { icon: "icon-[cib--next-js]", name: "Next Js" },
          { icon: "icon-[simple-icons--axios]", name: "Axios" },
        ],
        link: "https://latamverify.com/home",
        tag: "FrontEnd",
      },
      {
        images: [
          "https://drive.google.com/uc?id=1QJ_jrpd668dAIqUvhzA8-gQrhBtN9Atn",
        ],
        title: "Autenticación",
        description:
          "En esta plataforma también se estructuró la creación de usuarios con Firebase, donde se gestiona la información y seguridad de cada cliente a través de esta plataforma de autenticación, todas las pantallas se estilizaron usando tailwind",
        icons: [
          { icon: "icon-[devicon--firebase]", name: "Firebase" },
          { icon: "icon-[file-icons--tailwind]", name: "Tailwind Css" },
        ],
        link: "https://latamverify.com/login",
        tag: "FrontEnd",
      },
      {
        images: [
          "https://drive.google.com/uc?id=1JL0xkkLg2E1ckdre1f1PsvIorY7aNiie",
        ],
        title: "Pagos",
        description:
          "Se implementó la pasarela de pagos de stripe para adquirir una suscripción y poder tener acceso a las busquedas mensuales dependiendo del plan adquirido por cada uno de los usuarios anteriormente creados en firebase",
        icons: [{ icon: "icon-[bi--stripe]", name: "Stripe" }],
        link: "https://latamverify.com/subscription",
        tag: "FrontEnd",
      },
    ],
    tags: ["FrontEnd"],
  },
  {
    name: "Arbol y Miel",
    description:
      "Arbol y Miel es una iniciativa de una productora de Miel que busca hacer seguimiento a cada una de las colonias a través de códigos qrs",
    details: [
      {
        images: [
          "https://drive.google.com/uc?id=1l0bs4syJs9C0WAXgIGPq22Zkf2mIozWq",
          "https://drive.google.com/uc?id=17UpthvMLMZzNOVxPLAoiR2Y0m1VgS87M"
        ],
        title: "Usuarios y Autenticación",
        description:
          "Para esta plataforma creé el inicio de sesión para usuarios tanto administradores como super administrador, para el super administrador se desarrollo una pantalla donde puede crear usuarios de tipo administrador",
        icons: [
          { icon: "icon-[cib--next-js]", name: "Next Js" },
          { icon: "icon-[file-icons--tailwind]", name: "Tailwind Css" },
        ],
        link: "",
        tag: "FrontEnd",
      },
      {
        images: [
          "https://drive.google.com/uc?id=1kmLDkYT2oS_Y91pGX-VTw76d3-s0OnQY",
          "https://drive.google.com/uc?id=1LccWPTIkvs_CqtGdIx1PI9TA4GxupBzO"
        ],
        title: "Creación de qrs",
        description:
          "También cree una vista para el usuario administrador donde puede crear meliponarios, y dentro de cada meliponario se pueden crear colonias, cada una de estas colonias se crean con un identificador único y un código qr que se puede escanear a través de una app que también desarrollé",
        icons: [
          { icon: "icon-[fontisto--react]", name: "Flowbite React" },
          { icon: "icon-[file-icons--tailwind]", name: "Tailwind Css" },
        ],
        link: "https://latamverify.com/login",
        tag: "FrontEnd",
      },
      {
        images: [
          "https://drive.google.com/uc?id=1y99BB8i1ET0DmRo_HMr8-uwvKuvSq9be",
          "https://drive.google.com/uc?id=1wwkvsi4MLXuxz5aAEeF3AmjbigxlI45d",
          "https://drive.google.com/uc?id=196kiBEQ-wRx0EQDCOp0hN5G0I8CGuJp-",
          "https://drive.google.com/uc?id=1t6PevGiPaHEQLa_tEudiGXJIWJnmNmO3"
        ],
        title: "App Mobile",
        description:
          "La app mobile se utiliza para hacer seguimiendo de las colonias asignadas por cada meliponario donde se puede hacer el control de cada una de ellas",
        icons: [{ icon: "icon-[fontisto--react]", name: "React Native" }, { icon: "icon-[logos--expo]", name: "Expo" }],
        link: "https://latamverify.com/subscription",
        tag: "FrontEnd",
      },
      {
        images: [
          "https://drive.google.com/uc?id=1aXKZdwS9CZzNNOrPAbMj-PkJDrL85fxJ",
          "https://drive.google.com/uc?id=1711-xig4mLlRUNNj8pk1liWNSIMli_xB",
        ],
        title: "Microservicio Backend",
        description:
          "Desde el backend se maneja la creación de usuarios administradores, que a su vez pueden crear usuarios para la app de control y seguimiento también pueden crear meliponarios y colonias con su respectivo id y código qr, también se maneja el logueo de cada usuario",
        icons: [{ icon: "icon-[devicon--nestjs]", name: "Nest js" }, { icon: "icon-[devicon--postgresql]", name: "Postgresql" }],
        link: "https://latamverify.com/subscription",
        tag: "FrontEnd",
      },
    ],
    tags: ["FrontEnd", "BackEnd"],
  },
  
  // {
  //   name: "White Car",
  //   description:
  //     "Plaforma de transporte especializada para tu mascota completamente legal y de la mejor calidad, conductores y vehículos certificados",
  //     details:
  //     [
  //       {
  //         image: "https://drive.google.com/uc?1nRSDYp8b3XlIeE0hFpqN5nUHGqLIPt983",
  //         title: "Blooma",
  //         description: "Blooma es una iniciativa que pretende gestionar proyectos tanto de diseño como de desarrollo desde el lado de las empresas y los freelancers capacitados para desarrollar este tipo de proyectos,",
  //         icons: [{icon: "icon-[cib--next-js]", name: "Next Js"}],
  //         link: ""
  //       },
  //       {
  //         image: "https://drive.google.com/uc?id=1IpACbPLs42wkiV2pZ-eEwl6OusnjidN3",
  //         title: "Autenticación",
  //         description: "Blooma es una iniciativa que pretende gestionar proyectos tanto de diseño como de desarrollo desde el lado de las empresas y los freelancers capacitados para desarrollar este tipo de proyectos,",
  //         icons: [{icon: "icon-[cib--next-js]", name: "Next Js"}],
  //         link: ""
  //       }
  //     ],
  //   technologies: ["", ""],
  //   images: [
  //     "https://drive.google.com/uc?id=1OE_n_KLHkrui4UDbNsGKgMvKrZK0Vjcf",
  //     "https://drive.google.com/file/d//view?usp=drive_link",
  //     "https://drive.google.com/uc?id=1JL0xkkLg2E1ckdre1f1PsvIorY7aNiie",
  //   ],
  // },
];
