<script setup lang="js">
import { defineEmits , ref } from 'vue'

const emit = defineEmits(["addfriend"]);

// function addfriends() {
//   emit("addfriend");
// }

const nom = ref("")
const email = ref("")
const phone = ref("")

function addfriends() {
    emit("addfriend", {
        nom: nom.value,
        email: email.value,
        phone: phone.value
    });
}


</script>

<template>
    <div class="container mx-auto p-4">
        <div class="card shadow-lg p-6 bg-base-100">
            <!-- <p @click="addfriends(name, phone, email)" v-for="(item, index) in tab_titres_films" class="text-gray-500">
            </p> -->
            <input v-model="nom" type="text" placeholder="Entrez le nom d'un ami"
                class="input input-bordered w-full mb-3" />
            <input v-model="email" type="text" placeholder="Entrez l'email' d'un ami"
                class="input input-bordered w-full mb-3" />
            <input v-model="phone" type="text" placeholder="Entrez le numéro d'un ami"
                class="input input-bordered w-full mb-3" />
             

            <button @click="addfriends"> clique </button>
        </div>
    </div>

</template>