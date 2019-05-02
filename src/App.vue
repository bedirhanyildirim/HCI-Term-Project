<template>
  <div id="app">
    <header-theme />
    <router-view />
    <footer-theme />
  </div>
</template>
<script>
import HeaderTheme from "./themes/header.theme.vue";
import FooterTheme from "./themes/footer.theme.vue";
export default {
  name: "App",
  components: { HeaderTheme, FooterTheme }
};
</script>

<style>
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
