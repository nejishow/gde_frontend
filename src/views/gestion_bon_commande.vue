<template>
  <div class="row mt-5">
    <div class="col-12">
      <h1>Gestion des bons de commandes</h1>
      <div class=" menu">
        <form action="" class="menu_form">
          <div class="form-group">
            <label for="years" class="form-group-label mr-2">Exercice: </label>
            <md-select
              @change="changeYear($event)"
              v-model="years"
              name="years"
              id="years"
            >
              <md-option value="fight-club">Fight Club</md-option>
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather-ii">Godfather II</md-option>
              <md-option value="godfather-iii">Godfather III</md-option>
            </md-select>
          </div>
          <div class="form-group">
            <label for="tb" class="form-group-label mr-2">Etat: </label>
            <select class="form-group-select" id="tb">
              <option>Valide</option>
              <option>Invalide</option>
            </select>
          </div>
        </form>
        <div class="menu_btn">
          <button class="btn btn-group btn-outline-success">
            Ajouter un BC
          </button>
        </div>
      </div>
    </div>
    <div class="col-12 mt-5">
      <div class="info mb-5">
        <span class="info_data">Nombre de bons de commandes: XX</span>
        <span class="info_data"
          >Total de bons de commandes en Francs DJ: XX</span
        >
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Numero Bon de commande</th>
            <th scope="col">Date</th>
            <th scope="col">Service</th>
            <th scope="col">Fournisseur</th>
            <th scope="col">Objet BC</th>
            <th scope="col">Numero de compte</th>
            <th scope="col">Montant</th>
            <th scope="col">Etat</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(bon, index) in data" :key="index">
            <th scope="row">{{ bon.Num_cmd }}</th>
            <td>{{ bon.Date_cmd }}</td>
            <td>{{ bon.Code_service }}</td>
            <td>{{ bon.Code_fournisseur }}</td>
            <td>{{ bon.Objet_cmd }}</td>
            <td>{{ bon.Num_compte }}</td>
            <td>{{ bon.Montant }}</td>
            <td>{{ bon.Etat }}</td>
            <!-- <td v-show="bon.enabled">{{bon.enabled}}</td>
            <td v-show="!bon.enabled">{{bon.enabled}}</td> -->
            <td>Consulter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import bonService from "../services/bon.services";
export default {
  name: "GBC",
  data() {
    return {
      data: [],
      year: [2020, 2019, 2018, 2017, 2016, 2015, 2014],
    };
  },
  methods: {
    changeYear(event) {
      bonService.getBons(event.target.value).then((data) => {
        this.data = data.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  height: 10rem;
  box-shadow: 0 1rem 2rem rgba(#0000, 0.4);
  position: relative;
  padding: 2rem;
  &_form {
    position: absolute;
    top: 0;
    left: 0;
    padding: 2rem;
  }
  &_button {
    margin-right: auto;
  }
}

.info {
  width: 100%;
  height: 2rem;
  box-shadow: 0 1rem 2rem rgba(#0000, 0.4);
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  background-color: rgb(78, 58, 5);
  &_data {
    display: inline-block;
    color: white;
  }
}
</style>
