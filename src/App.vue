<template>
<div id="app" class="container">
    <Header></Header>
    <router-view />
</div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header,
  },
  mounted() {
    this.$store.dispatch('getAllMandats')
    this.$store.dispatch('getAllBons')
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
.disable{
visibility: hidden;}
</style>
