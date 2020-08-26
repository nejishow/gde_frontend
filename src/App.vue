<template>
<div id="app" class="container">
    <Header></Header>
    <GBP></GBP>
    <router-view />
</div>
</template>

<script>
import Header from "./components/Header";
import GBP from "./views/gestion_budget_previsionel";
export default {
  components: {
    Header,
    GBP
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
