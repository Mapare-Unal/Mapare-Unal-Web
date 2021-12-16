import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cotizacion from "../views/Cotizacion.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/cotizacion",
    name: "Cotizacion",
    component: Cotizacion
  }
];

const router = new VueRouter({
  routes
});

export default router;
