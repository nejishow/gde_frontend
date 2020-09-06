<template>
  <div class="row mt-5">
    <div class="col-12 text-left">
      <h1>Gestion du budget previsionel</h1>
      <form action="" class="form mb-5 mt-5">
        <div class="form-group">
          <label for="eb" class="form-group-label mr-2"
            >Exercice Budgetaire:
          </label>
          <select class="form--group-select" id="eb" v-model="year">
            <option v-for="(year, index) in years" :key="index">{{
              year
            }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="tb" class="form-group-label mr-2">Type de budget: </label>
          <select class="form-group-select" id="tb" v-model="type_budget">
            <option value="BUDGET DE FONCTIONNEMENT"
              >BUDGET DE FONCTIONNEMENT</option
            >
            <option value="BUDGET D'INVESTISSEMENT"
              >BUDGET D'INVESTISSEMENT</option
            >
            <option value="RECETTE">RECETTE</option>
          </select>
        </div>
      </form>
    </div>
    <div class="col-6">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Numero de compte budgetaire</th>
            <th scope="col">Libellé compte budgetaire</th>
            <th scope="col">Montant budgetisé</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in DataPerYear" :key="index">
            <th scope="row">{{ item.num_compte }}</th>
            <td>{{ item.name_compte }}</td>
            <td>{{ item.montant }}</td>
          </tr>
          <tr>
            <th scope="row" colspan="2">Total</th>
            <td>{{ total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-6">
      <ul class="list-group">
        <li class="list-group-item">Etat du budget previsionel</li>
        <li class="list-group-item">Transfert de compte à compte</li>
        <li class="list-group-item">Etat globale de l'execution budgetaire</li>
        <li class="list-group-item">Etat detaillé de l'execution budgetaire</li>
        <li class="list-group-item">
          Etat detaillé de l'execution budgetaire en %
        </li>
        <li class="list-group-item">Etat de ventilation budgetaire</li>
      </ul>
    </div>
  </div>
</template>

<script>
import budgetService from "../services/budget";
import compteService from "../services/compte_budgetaire";
import rubriqueService from "../services/rubrique";
export default {
  data() {
    return {
      budget: [],
      comptes: [],
      rubriques: [],
      year: 2020,
      type_budget: "BUDGET DE FONCTIONNEMENT",
    };
  },
  computed: {
    DataPerYear() {
      //   var budgetYear = this.budget.filter((element) => {
      //     return element.Exercice == this.year;
      //   });
      var dataRubrique = this.rubriques.filter((element) => {
        return element.Type_Rubrique == this.type_budget;
      });
      var finalCompte = [];
      dataRubrique.forEach((dr) => {
        this.comptes.forEach((compte) => {
          if (compte.Rubrique == dr.Num_Rubrique) {
            finalCompte.push(compte);
          }
        });
      });
      var finalData = [];
      this.budget.forEach((dr) => {
        finalCompte.forEach((compte) => {
          if (compte.Num_Compte == dr.Num_Compte && dr.Exercice == this.year) {
            finalData.push({
              num_compte: compte.Num_Compte,
              name_compte: compte.Libellé,
              montant: dr.Budget,
            });
          }
        });
      });
      return finalData;
    },
    total() {
      var result = 0;
      for (let index = 0; index < this.DataPerYear.length; index++) {
        result += parseFloat(this.DataPerYear[index].montant.replace(/,/g, ""));
      }
      return new Intl.NumberFormat("dj-DJ", {
        style: "currency",
        currency: "FDJ",
      }).format(result);
    },
    years() {
      let array = [];
      for (let index = 0; index < 100; index++) {
        const year = new Date().getFullYear();
        array.push(year - index);
        if (array[index] == 2013) {
          break;
        }
      }
      return array;
    },
  },
  mounted() {
    budgetService.getAllBudgets().then((data) => {
      this.budget = data.data;
    });
    compteService.getAllComptes().then((data) => {
      this.comptes = data.data;
    });
    rubriqueService.getAllRubriques().then((data) => {
      this.rubriques = data.data;
    });
    this.year = new Date().getFullYear();
  },
};
</script>

<style lang="scss" scoped>
.form {
  &-group {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 10rem;
    }
  }
}

.table {
  box-shadow: 0 1rem 2rem rgba(#000000, 0.5);
}

.list-group {
  &-item {
    &:hover {
      background-color: rgba($color: #b85d5da4, $alpha: 1);
      color: white;
      cursor: pointer;
    }
  }
}
</style>
