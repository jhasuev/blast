import { createRouter, createWebHashHistory } from "vue-router"

const redirectIfNotExistsFromRoute = (to, from, next) => {
  if (!from.name) next({ name: "home" })
  else next()
}

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
    beforeEnter: redirectIfNotExistsFromRoute,
  },
  {
    path: "/game",
    name: "game",
    component: () => import("@/views/Game"),
    beforeEnter: redirectIfNotExistsFromRoute,
  },
  {
    path: "/record",
    name: "record",
    component: () => import("@/views/Record"),
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