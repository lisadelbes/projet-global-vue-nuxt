<script setup>
import { ref } from 'vue'

// OBJET :
// defineProps({
//   msg: String,
//   name: String,
// })

defineProps(['foo','username'])


const count = ref(0)
</script>

<template>
  <h1>Salut {{ foo }} - {{ username }}</h1>
  <!-- OBJET --> 
  <!-- <h1>Salut {{ name }} - {{ msg }}</h1> -->

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>