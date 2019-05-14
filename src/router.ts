import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Design from "./views/Design.vue";
import Development from "./views/Development.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/",
      name: "development",
      component: Development
    },
    {
      path: "/",
      name: "Design",
      component: Design
    },
  ]
});
