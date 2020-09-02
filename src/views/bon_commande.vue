<template>
  <div class="" id="bon">
    <div class="text-right" v-show="!isModify">
      <button
        class="btn btn-group btn-outline-info mt-3"
        @click="isModify = true"
      >
        Modifier
      </button>

      <div class="bon_box row">
        <div class="col-8 card bg-warning p-3">
          <div class="cmd row d-flex justify-content-between">
            <div class="num_cmd">
              <label for="num_cmd">Numero commande: </label>
              <input readonly type="text" :value="BON.Num_cmd" id="num_cmd" />
            </div>
            <div class="date_cmd">
              <label for="date_cmd">Date commande: </label>
              <input readonly type="text" :value="BON.Date_cmd" id="date_cmd" />
            </div>
          </div>
          <div class="objet row d-flex justify-content-between">
            <label for="objet" class="objet_label col-2">Objet:</label>
            <input
              readonly
              :value="BON.Objet_cmd"
              type="text"
              id="objet"
              class="objet_input col-10"
            />
          </div>
          <div class="fournisseur row d-flex justify-content-between">
            <label for="fournisseur" class="fournisseur_label col-2"
              >Fournisseur:</label
            >
            <input
              type="text"
              class="fournisseur_input1 col-3"
              :value="BON.Code_fournisseur"
              readonly
            />
            <input
              type="text"
              class="fournisseur_input2 col-5"
              :value="fournisseur.Nom_Fournisseur"
              readonly
            />
          </div>
          <div class="compte row d-flex justify-content-between">
            <label for="compte" class="compte_label col-2">Compte:</label>
            <input
              type="text"
              class="compte_input1 col-3"
              :value="BON.Num_compte"
              readonly
            />
            <input
              readonly
              type="text"
              class="compte_input2 col-5"
              :value="compte.Libellé"
            />
          </div>
          <div class="service row d-flex justify-content-between">
            <label for="service" class="service col-2">Service:</label>
            <input
              type="text"
              class="service_input1 col-3"
              :value="BON.Code_service"
              readonly
            />
            <input
              type="text"
              class="service_input2 col-5"
              :value="service.Nom_service"
              readonly
            />
          </div>
        </div>
        <div class="col-4 text-light bg-info card">
          <div class="row">
            <div class="col-6 text-left ">
              <div class="budgetise mb-3">
                <h5>Budgetisé</h5>
                234567890 ------- 100%
              </div>
              <div class="engage mb-3">
                <h5>Engage</h5>
                234567890 ------- 100%
              </div>
              <div class="disponible">
                <h5>Disponible</h5>
                234567890 ------- 100%
              </div>
            </div>
            <div class="col-12 mt-5 text-left">
              <h6>Piece jointe</h6>
              <!-- <label for="joint">Piece jointe</label>
              <input type="file"> -->
              <img src="../assets/file.jpg" class="" alt="" width="30" />
            </div>
          </div>
        </div>
      </div>
      <div class="row cmd_box">
        <table class="table text-left">
          <thead>
            <tr>
              <th colspan="2">Article</th>
              <th>Prix unitaire</th>
              <th>Quantité</th>
              <th>Montant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2">
                {{ BON.Objet_cmd }}
              </td>
              <td>
                {{ BON.Montant }}
              </td>
              <td>
                1
              </td>
              <td>
                {{ BON.Montant }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="text-right" v-show="isModify">
      <button class="btn btn-group btn-outline-success mt-3">
        Sauvegarder
      </button>
      <button
        class="btn btn-group btn-outline-danger mt-3"
        @click="isModify = false"
      >
        Annuler
      </button>

      <div class="bon_box row">
        <div class="col-8 card bg-warning p-3">
          <div class="cmd row d-flex justify-content-between">
            <div class="num_cmd">
              <label for="num_cmd_m">Numero commande: </label>
              <input type="text" :value="BON.Num_cmd" id="num_cmd_m" />
            </div>
            <div class="date_cmd">
              <label for="date_cmd_m">Date commande: </label>
              <input type="text" :value="BON.Date_cmd" id="date_cmd_m" />
            </div>
          </div>
          <div class="objet row d-flex justify-content-between">
            <label for="objet_m" class="objet_label col-2">Objet:</label>
            <input
              :value="BON.Objet_cmd"
              type="text"
              id="objet_m"
              class="objet_input col-10"
            />
          </div>
          <div class="fournisseur row d-flex justify-content-between">
            <label for="fournisseur_m" class="fournisseur_label col-2"
              >Fournisseur:</label
            >
            <select v-model="BON.Code_fournisseur"  name="fournisseur" id="">
              <option v-for="(fourn, index) in fournisseurs" :key="index" :value="fourn.Code_Fournisseur">{{fourn.Code_Fournisseur}}</option>
            </select>
            <input
              type="text"
              class="fournisseur_input2 col-5"
              readonly
              :value="fournisseur.Nom_Fournisseur"
            />
          </div>
          <div class="compte row d-flex justify-content-between">
            <label for="compte" class="compte_label col-2">Compte:</label>
            <input
              type="text"
              class="compte_input1 col-3"
              :value="BON.Num_compte"
            />
            <input readonly type="text" class="compte_input2 col-5" value="" />
          </div>
          <div class="service row d-flex justify-content-between">
            <label for="service" class="service col-2">Service:</label>
            <input
              type="text"
              class="service_input1 col-3"
              :value="BON.Code_service"
            />
            <input
              type="text"
              class="service_input2 col-5"
              value="nom"
              readonly
            />
          </div>
        </div>
        <div class="col-4 text-light bg-info card">
          <div class="row">
            <div class="col-6 text-left ">
              <div class="budgetise mb-3">
                <h5>Budgetisé</h5>
                234567890 ------- 100%
              </div>
              <div class="engage mb-3">
                <h5>Engage</h5>
                234567890 ------- 100%
              </div>
              <div class="disponible">
                <h5>Disponible</h5>
                234567890 ------- 100%
              </div>
            </div>
            <div class="col-12 mt-5 text-left">
              <h6>Piece jointe</h6>
              <label for="joint">Piece jointe</label>
              <input type="file" />
            </div>
          </div>
        </div>
      </div>
      <div class="row cmd_box text-left">
        <div class="col-6 d-flex flex-column">
          <h5>ARTICLE</h5>
          <input
            type="text"
            name="article"
            v-model="BON.Objet_cmd"
            width="300px"
          />
        </div>
        <div class="col-2d-flex flex-column">
          <h5>Prix unitaire</h5>
          <input type="string" name="price" v-model="BON.Montant" />
        </div>
        <div class="col-2d-flex flex-column">
          <h5>Quantité</h5>
          <input type="text" name="total" readonly value="1" />
        </div>
        <div class="col-2d-flex flex-column">
          <h5>Montant</h5>
          <input type="text" name="total" readonly :value="BON.Montant" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bonServices from "../services/bon.services";
import fournisseurServices from "../services/fournisseur";
import compteServices from "../services/compte_budgetaire";
import serviceServices from "../services/services";
export default {
  data() {
    return {
      isModify: false,
      idCommande: "",
      BON: {},
      fournisseurs: [],
      comptes: [],
      services: [],
    };
  },
  methods: {
    addNewArticle() {},
    removeArticle(index) {
      this.newArticle.splice(index, 1);
      console.log("test");
    },
  },
  computed: {
    fournisseur() {
      var fourn = {};
      this.fournisseurs.forEach((element) => {
        if (element.Code_Fournisseur === this.BON.Code_fournisseur) {
          fourn = element;
        }
      });
      return fourn;
    },
    compte() {
      var fourn = {};
      this.comptes.forEach((element) => {
        if (element.Num_Compte === this.BON.Num_compte) {
          fourn = element;
        }
      });
      return fourn;
    },
    service() {
      var fourn = {};
      this.services.forEach((element) => {
        if (element.Code_service === this.BON.Code_service) {
          fourn = element;
        }
      });
      return fourn;
    },
  },
  mounted() {
    this.idCommande = this.$route.params.id;
    bonServices.getBon(this.idCommande).then((response) => {
      this.BON = response.data;
    });
    fournisseurServices.getAllFournisseurs().then((response) => {
      console.log(typeof response.data);
      this.fournisseurs = response.data;
    });
    compteServices.getAllComptes().then((response) => {
      this.comptes = response.data;
    });
    serviceServices.getAllServices().then((response) => {
      this.services = response.data;
    });
  },
};
</script>
<style lang="scss" scoped>
.num_cmd,
.date_cmd {
  display: inline-block;
}

.row {
  margin-top: 2rem;
}
</style>
