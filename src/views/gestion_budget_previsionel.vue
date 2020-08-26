<template>
<div class="row">
    <div class="col-12">
        <form action="" class="form mb-5 mt-5">
            <div class="form-group">
                <label for="eb" class="form-group-label mr-2">Exercice Budgetaire: </label>
                <select class="form--group-select" id="eb">
                    <option></option>
                    <option>2020</option>

                </select> </div>
            <div class="form-group">
                <label for="tb" class="form-group-label mr-2">Type de budget: </label>
                <select class="form-group-select" id="tb">
                    <option></option>
                    <option>ABCD</option>

                </select> </div>
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
                <tr>
                    <th scope="row">2222</th>
                    <td>ABCD</td>
                    <td>1234</td>
                </tr>
                <tr>
                    <th scope="row" colspan="2">Total</th>
                    <td>0000</td>
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
            <li class="list-group-item">Etat detaillé de l'execution budgetaire en %</li>
            <li class="list-group-item">Etat de ventilation budgetaire</li>
        </ul>
    </div>
</div>
</template>

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
    box-shadow: 0 1rem 2rem rgba(#000000, .5);

}

.list-group {
    &-item {
        &:hover {
            background-color: rgba($color: #b85d5da4, $alpha: 1.0);
            color: white;
            cursor: pointer;
        }
    }
}
</style>
