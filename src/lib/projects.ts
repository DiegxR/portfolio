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
        ],
        title: "General",
        description:
          "Por temas de seguridad no puedo compartir mucha información de esta iniciativa, pero aquí un poco del FrontEnd con el cuál se genera los usuarios desde el admin, y los códigos qrs para las colonias",
        icons: [
          { icon: "icon-[cib--next-js]", name: "Next Js" },
          { icon: "icon-[simple-icons--axios]", name: "Axios" },
        ],
        link: "",
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
