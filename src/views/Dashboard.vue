<template>
  <div class="dashboard">
    <div class="header mt-5">
      <div class="ministere">
        ministere de la communication, chargé des postes et de la
        télecommunication
      </div>
      <div class="date">Date d'aujourd'hui: {{ date }}</div>
    </div>
    <div class="main row mt-5">
      <div class="col-4">
        <img src="../assets/logo.png" alt="Logo" class="logo" />
      </div>
      <div class="col-6">
        <h1 class="name">Gestion des depenses engagés v.2020</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date:
        new Date().getDate() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  position: relative;
}

.header {
  width: 100%;
  height: 3rem;

  display: flex;
  justify-content: space-between;
  .ministere {
    display: block;
    width: 20%;
  }
  .date {
    display: inline-block;
  }
}

.main {
  width: 100%;
  .name {
  }
  .logo {
    width: 80%;
  }
}
</style>
