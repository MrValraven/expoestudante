import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sobre/onde",
    name: "Onde",

    component: () => import(/* webpackChunkName: "Onde" */ "../views/Onde.vue"),
  },
  {
    path: "/sobre/porque",
    name: "Porque",

    component: () =>
      import(/* webpackChunkName: "Porque" */ "../views/Porque.vue"),
  },
  {
    path: "/sobre/inscricoes",
    name: "Inscricoes",

    component: () =>
      import(/* webpackChunkName: "Inscricoes" */ "../views/Inscricoes.vue"),
  },
  {
    path: "/sobre/oradores",
    name: "Oradores",

    component: () =>
      import(/* webpackChunkName: "Oradores" */ "../views/Oradores.vue"),
  },
  {
    path: "/contactos",
    name: "Contactos",

    component: () =>
      import(/* webpackChunkName: "Contactos" */ "../views/Contatos.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
