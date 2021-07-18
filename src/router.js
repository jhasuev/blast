import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home"),
  },
  {
    path: "/result",
    name: "result",
    component: () => import("@/views/Result"),
  },
  {
    path: "/game",
    name: "game",
    component: () => import("@/views/Game"),
  },
  {
    path: "/records",
    name: "records",
    component: () => import("@/views/Records"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/404"),
  },
]

export default createRouter({
  routes,
  history: createWebHashHistory()
})