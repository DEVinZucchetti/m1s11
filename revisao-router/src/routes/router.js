import {createRouter, createWebHashHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"

export const router = createRouter({
  history: createWebHashHistory(),
  /**
   * CADA ROTA DEVE TER:
   * 
   * 1 - [x] path -> é a url que dará acesso a página
   * 2 - [x] component -> o componente que será renderizado
   * 3 - [x] name -> nome da rota
   */
  routes: [
    {
      path: "/",
      component: HomeView,
      name: 'home'
    },
    {
      path: "/sobre/:id",
      component: AboutView,
      name: 'sobre'
    }
  ]
})