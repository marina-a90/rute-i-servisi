<template>
  <div id="app">
     
  <h1>Bla</h1>
  <router-view />

  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <router-link to="/">Home</router-link>
  <router-link to="about">About</router-link>
  <router-link to="settings">Settings</router-link>

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
