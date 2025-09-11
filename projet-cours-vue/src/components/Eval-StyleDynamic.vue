<template>
  <div class="container">
    <input type="text" placeholder="Écris du texte" v-model="saisie" />
  

    <h2 :class="classeAppliquee":style="{ backgroundColor: saisiebis }">
      Vérification de la réaction à la saisie
    </h2>

      <input type="text" placeholder="Écris la couleur de fond" v-model="saisiebis" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const saisie = ref("");
const saisiebis = ref("");

// classe calculée selon la saisie
const classeAppliquee = computed(() => {
  if (saisie.value === "hello") {
    return "maClasseHello";
  }
  if (saisie.value === "world") {
    return "maClasseWorld";
  }
  return "";
});
</script>

<style scoped>
.maClasseHello {
  color: green;
  font-weight: bold;
}

.maClasseWorld {
  color: blue;
  text-transform: uppercase;
}
</style>