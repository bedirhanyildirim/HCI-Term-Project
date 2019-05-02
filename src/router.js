import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/Archives.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "To Do App | Home"
    }
  },
  {
    path: "/archives",
    name: "archives",
    component: About,
    meta: {
      title: "To Do App | Archives"
    }
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new Router({
  mode: "history",
  routes: routes
});

router.beforeResolve((to, from, next) => {
  next();
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
