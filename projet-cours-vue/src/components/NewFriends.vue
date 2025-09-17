<script setup lang="js">
import { defineEmits , ref } from 'vue'

const emit = defineEmits(["ajout"]);

// function addfriends() {
//   emit("addfriend");
// }

const nom = ref("")
const email = ref("")
const phone = ref("")

function addfriends() {
    emit("ajout", {
        id: Math.random().toString(),
        nom: nom.value,
        email: email.value,
        phone: phone.value,
        premium: false
    });
}
</script>

<template>
    <div class="container mx-auto p-4">
        <div class="card shadow-lg p-6 bg-base-100">
            <label class="label" for="name"> Son nom </label>
            <input id="name" v-model="nom" type="text" placeholder="Entrez le nom d'un ami"
                class="input input-bordered w-full mb-3" labe/>
            <label class="label" for="mail"> Son mail </label>
            <input id="mail" v-model="email" type="text" placeholder="Entrez l'email' d'un ami"
                class="input input-bordered w-full mb-3" />
            <label class="label" for="tel"> Son numéro de téléphone </label>
            <input id="tel" v-model="phone" type="text" placeholder="Entrez le numéro d'un ami"
                class="input input-bordered w-full mb-3" />
            <button @click="addfriends"> clique </button>
        </div>
    </div>

</template>