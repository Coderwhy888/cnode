import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/login",
    name: "login",
    // redirect: "/home/login",
    component: () => import("../components/son/login.vue")
  },
  // {
  // //   path: "/details",
  // //   name: "details",
  // //   // redirect: "/home/details",
  // //   component: () => import("../components/son/details.vue")
  // // },
  {
    path: "/layout",
    name: "layout",

    // redirect: "/home/layout",
    component: () => import("../components/layout"),
    children: [
      {
        path: "layout",
        name: "details",

        component: () => import("../components/son/details.vue")
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
