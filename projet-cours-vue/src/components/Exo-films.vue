<template>
    <div class="container mx-auto p-4">
        <div class="card shadow-lg p-6 bg-base-100">
            <h2 class="text-2xl font-bold mb-4">WatchList 🎬 (Films à voir) - Mode : Composition</h2>

            <input  v-model="titre" type="text" placeholder="Entrez le nom d'un film"
                class="input input-bordered w-full mb-3" />

            <button  @click="ajout_films" class="btn btn-primary mb-4">
                Ajouter à votre Liste
            </button>

            <hr class="my-4" />

            <div >
                <h3 class="text-xl font-semibold mb-2">Votre film ajouté : </h3>
            </div>

            <p v-if="tab_titres_films.length == 0" class="text-gray-500">
                Pas encore de films dans votre liste ? Veuillez en ajouter un.
            </p>

            <!-- <p v-else class="text-gray-500">
                Votre film : {{ tab_titres_films }}
            </p> -->

             <p @click="info(item, index)" v-for="(item, index) in tab_titres_films" class="text-gray-500">
                Votre nouveau film n°{{ index +1 }} : {{ item }}
            </p>
        </div>
    </div>
</template>

<script setup lang="js">
import { ref } from "vue";

const titre = ref("");
const tab_titres_films = ref([]);

function ajout_films(){
    tab_titres_films.value.push(titre.value);
    titre.value = "";
}

function info(item, index) {
    tab_titres_films.value.splice(index, 1);
}


</script>

<style scoped>
</style>