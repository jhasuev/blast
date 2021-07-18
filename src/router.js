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
]

export default createRouter({
  routes,
  history: createWebHashHistory()
})