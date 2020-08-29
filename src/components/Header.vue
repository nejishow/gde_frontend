<template>
<div class="header pt-5 row">
    <div class="col-12">
        <ul class="nav-list">
            <li class="nav-list-item">
                <router-link to="/">Acceuil</router-link>
            </li>
            <li class="nav-list-item nav-link">
                <b-nav-item-dropdown text="Ordonnancements" id="dropdown-left">
                    <b-dropdown-item href="#" ><router-link to="/GBP">Gestion budget previsionel</router-link></b-dropdown-item>
                    <b-dropdown-item href="#"><router-link to="/GBC">Gestion de bons de commandes</router-link></b-dropdown-item>
                    <b-dropdown-item href="#"><router-link to="/GMP">Gestion de mandats</router-link></b-dropdown-item>
                    <b-dropdown-item href="#">Gestion des bons de caisses</b-dropdown-item>
                    <b-dropdown-item href="#">Gestion des recettes budgetaires</b-dropdown-item>
                </b-nav-item-dropdown>
            </li>
            <li class="nav-list-item nav-link">
                <b-nav-item-dropdown text="Editions">
                    <b-dropdown-item href="#">Suivi budget</b-dropdown-item>
                    <b-dropdown-item href="#">Liste des BC partiellement payés</b-dropdown-item>
                    <b-dropdown-item href="#">Etat statistiques trimestriels</b-dropdown-item>
                    <b-dropdown-item href="#">Tableau de bord</b-dropdown-item>
                </b-nav-item-dropdown>
            </li>
        </ul>
    </div>
</div>
</template>

<style lang="scss" scoped>

.header{
    border-bottom: solid 2px grey;

}
.nav-list {
    list-style: none;

    &-item {
        display: inline-block;
        cursor: pointer;

        &:not(:last-child) {
            margin-right: 2rem;
        }
    }
}

</style>
