<script setup lang="js">
import { defineEmits, ref } from 'vue'

const emit = defineEmits(["ajout"]);

const nom = ref("");
const age = ref("");

function validateUser(nomValue, ageValue) {
  if (typeof nomValue !== 'string') {
    return false;
  }
  const ageNumber = Number(ageValue);
  if (isNaN(ageNumber) || ageNumber <= 0) {
    return false;
  }
  return true;
}

function adduser() {
  if (!validateUser(nom.value, age.value)) {
    return;
  }

  emit("ajout", {
    nom: nom.value.trim(),
    age: Number(age.value)
  });
}
</script>

<template>
    <div class="container mx-auto p-4">
        <div class="card shadow-lg p-6 bg-base-100">
            <h2 class="text-2xl font-bold mb-4">Formulaire pour l'utilisateur ✏️</h2>

            <label class="label" for="name"> Son nom </label>
            <input id="name" v-model="nom" type="text" placeholder="Entrez le nom"
                class="input input-bordered w-full mb-3" labe/>

            <label class="label" for="mail"> Son age </label>
            <input id="mail" v-model="age" type="number" placeholder="Entrez l'âge"
                class="input input-bordered w-full mb-3" />

            <button @click="adduser" style="background-color: purple; color: white"> Clique ici pour afficher ton utilisateur </button>
        </div>
    </div>

</template>

<style scoped>

</style>