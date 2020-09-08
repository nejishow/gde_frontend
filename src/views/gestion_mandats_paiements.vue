<template>
  <div class="row mt-5">
    <div class="col-12">
      <h1>Gestion des mandats de paiements</h1>
      <div class=" menu">
        <form action="" class="menu_form">
          <div class="form-group">
            <label for="eb" class="form-group-label mr-2">Exercice: </label>
            <select class="form--group-select" id="eb">
              <option>2020</option>
              <option>2019</option>
            </select>
          </div>
          <div class="form-group">
            <label for="tb" class="form-group-label mr-2">Paye: </label>
            <input type="checkbox" id="tb" />
          </div>
        </form>
        <div class="menu_btn">
          <button class="btn btn-group btn-outline-success">
            Ajouter un mandat
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
      {{filteredMandats}}
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">N° Mandat</th>
            <th scope="col">N° commande</th>
            <th scope="col">N° compte</th>
            <th scope="col">Date</th>
            <th scope="col">Service</th>
            <th scope="col">Fournisseur</th>
            <th scope="col">Objet BC</th>
            <th scope="col">Montant</th>
            <th scope="col">Paye</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <th scope="row">2222</th>
            <td>ABCD</td>
            <td>1234</td>
            <td>1234</td>
            <td>1234</td>
            <td>1234</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, soluta nam iste minus autem excepturi aliquam commodi illo recusandae ullam amet rem assumenda blanditiis numquam quaerat minima aperiam mollitia neque?</td>
            <td>1234</td>
            <td>1234</td>
            <td>Consulter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import mandatService from '../services/mandats';
export default {
  data() {
    return {
      filteredMandats:[]
    }
  },
  computed: {
    mandats() {
      return this.$store.state.mandat.mandats
    }
  },
  mounted() {
    mandatService.getAllMandats().then((response)=>{
      this.filteredMandats = response.data
    })
  },
}
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
  background-color: rgb(4, 134, 58);
  &_data {
    display: inline-block;
    color: white;
  }
}
</style>
