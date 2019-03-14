import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;

import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Settings from "./components/Settings.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/settings/:id?", component: Settings }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
