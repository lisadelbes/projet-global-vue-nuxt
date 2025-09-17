<script setup lang="js">

const props = defineProps({
  name: String,
  age: Number,
})


</script>

<template>
  <div class="card shadow-md bg-base-100 mb-4">
    <div class="card-body p-4 flex flex-col gap-2">
      <!-- En-tête -->
      <div class="bg-purple flex justify-between items-center">
        <h2 class="bg-purple card-title text-lg font-bold">
          Composant affichage des données utilisateur
   
        </h2>
      </div>

      <!-- Infos -->
      <p class="text-sm text-white">
        <span class="font-semibold" > Nom : </span>{{ name }}
        <br></br>
        <span class="font-semibold">Age : </span> {{ age }}
      </p>

    </div>
  </div>
</template>

<style scoped>

</style>
