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
              <input readonly type="text" id="num_cmd" />
            </div>
            <div class="date_cmd">
              <label for="date_cmd">Date commande: </label>
              <input readonly type="text" id="date_cmd" value="" />
            </div>
          </div>
          <div class="objet row d-flex justify-content-between">
            <label for="objet" class="objet_label col-2">Objet:</label>
            <input readonly type="text" id="objet" class="objet_input col-10" />
          </div>
          <div class="fournisseur row d-flex justify-content-between">
            <label for="fournisseur" class="fournisseur_label col-2"
              >Fournisseur:</label
            >
            <input
              type="text"
              class="fournisseur_input1 col-3"
              value="numero"
              readonly
            />
            <input
              type="text"
              class="fournisseur_input2 col-5"
              value="nom"
              readonly
            />
          </div>
          <div class="compte row d-flex justify-content-between">
            <label for="compte" class="compte_label col-2">Compte:</label>
            <input
              type="text"
              class="compte_input1 col-3"
              value="numero"
              readonly
            />
            <input
              readonly
              type="text"
              class="compte_input2 col-5"
              value="nom"
            />
          </div>
          <div class="service row d-flex justify-content-between">
            <label for="service" class="service col-2">Service:</label>
            <input
              type="text"
              class="service_input1 col-3"
              value="numero"
              readonly
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
              <!-- <label for="joint">Piece jointe</label>
              <input type="file"> -->
              <img src="../assets/file.jpg" class="" alt="" width="30" />
            </div>
          </div>
        </div>
      </div>
      <div class="row cmd_box">
        <table class="table">
          <thead>
            <tr>
              <th>Article</th>
              <th>Prix unitaire</th>
              <th>Quantité</th>
              <th>Montant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                article
              </td>
              <td>
                PU
              </td>
              <td>
                Quantité
              </td>
              <td>
                montant
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
              <label for="num_cmd">Numero commande: </label>
              <input readonly type="text" id="num_cmd" />
            </div>
            <div class="date_cmd">
              <label for="date_cmd">Date commande: </label>
              <input readonly type="text" id="date_cmd" value="" />
            </div>
          </div>
          <div class="objet row d-flex justify-content-between">
            <label for="objet" class="objet_label col-2">Objet:</label>
            <input readonly type="text" id="objet" class="objet_input col-10" />
          </div>
          <div class="fournisseur row d-flex justify-content-between">
            <label for="fournisseur" class="fournisseur_label col-2"
              >Fournisseur:</label
            >
            <input
              type="text"
              class="fournisseur_input1 col-3"
              value="numero"
              readonly
            />
            <input
              type="text"
              class="fournisseur_input2 col-5"
              value="nom"
              readonly
            />
          </div>
          <div class="compte row d-flex justify-content-between">
            <label for="compte" class="compte_label col-2">Compte:</label>
            <input
              type="text"
              class="compte_input1 col-3"
              value="numero"
              readonly
            />
            <input
              readonly
              type="text"
              class="compte_input2 col-5"
              value="nom"
            />
          </div>
          <div class="service row d-flex justify-content-between">
            <label for="service" class="service col-2">Service:</label>
            <input
              type="text"
              class="service_input1 col-3"
              value="numero"
              readonly
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
      <div class="row cmd_box">
        <button class="btn btn-success" @click="addCell">cellule</button>
        <table class="table">
          <thead>
            <tr>
              <th>Article</th>
              <th>Prix unitaire</th>
              <th>Quantité</th>
              <th>Montant</th>
            </tr>
          </thead>
          <tbody id="article">
            <tr class="newArticle">
              <td>
<input type="text">              </td>
              <td>
                <input type="text">  
              </td>
              <td>
                <input type="text">  
              </td>
              <td>
                <input type="text">  
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModify: true,
      article: document.getElementById("article"),
    };
  },
  methods: {
    addCell() {
      const newArticle = document.createElement("tr");
      newArticle.innerHTML = "<td><input type='text'></td><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td>"
      document.getElementById("article").appendChild(newArticle);
    },
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
