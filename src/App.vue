<template>
    <div class="app">
      <div id="nav">
        <router-link to="/home">Home</router-link> |
        <router-link to="/messages">Messages</router-link> |
        <router-link to="/contacts">Contacts</router-link> |
      </div>
      <router-view/>
      <Menu/>
    </div>
</template>

<script>
import Menu from "./components/Menu.vue";

export default {
    name: "App",
    components: {
        Menu
    },
    methods: {
    }
};
</script>

<style>
html, body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 45%;
}
</style>
