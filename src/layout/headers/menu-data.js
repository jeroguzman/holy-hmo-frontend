const menu_data = [
  {
    id: 1,
    title: "Inicio",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "Eventos",
    link: "/eventos",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Lugares",
    link: "/lugares",
    has_dropdown: false,
  },
  {
    id: 4,
    title: "Comunidad",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/noticias", title: "Noticias" },
      { link: "/testimonios", title: "Testimonios" },
      { link: "/ensenanzas", title: "Enseñanzas" },
    ],
  },
  {
    id: 5,
    title: "Nosotros",
    link: "/nosotros",
    has_dropdown: false,
  },
  
];
export default menu_data;
