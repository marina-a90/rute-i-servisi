import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;

import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Settings from "./components/Settings.vue";
import User from "./components/User.vue";
import Profile from "./components/Profile.vue";
import Posts from "./components/Posts.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/settings/:id?", component: Settings },
  {
    path: "/user/:id",
    component: User,
    redirect: "/user/:id/profile",
    children: [
      { path: "profile", component: Profile },
      { path: "posts", component: Posts }
    ]
  }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
