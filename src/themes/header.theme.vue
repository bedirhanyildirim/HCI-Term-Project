<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/archives">Archives</router-link>
  </div>
</template>
<script>
export default {
  name: "HeaderTheme",
  data: function() {}
};
</script>
<style scoped>
a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>
