<template>
  <footer class="footer p-10 bg-base-300 text-base-content rounded-box shadow-lg">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Section "À propos" -->
        <div>
          <span class="footer-title">Coucou petit exo binding</span>
          <p> {{ name }} </p>
          <img :src="img" class="text-center">
          <p class="text-sm text-gray-500"> Mon âge est de {{ age }} ans. </p>
          <p class="text-sm text-gray-500"> Mon âge dans 10 ans est de {{ age + 10 }} ans. </p>
          <p class="text-sm text-gray-500"> Mon nombre fétiche est {{ random }}. </p>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
const name = ref("Mario");
const img = ref("https://s2.qwant.com/thumbr/474x305/4/a/f753e859be6782ef190f11e843cf7ef1c97b611cc766ec76a56b34a714caa4/OIP.7_bnbb7xhbhPd9_Q99gA8gHaEx.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%2Fid%2FOIP.7_bnbb7xhbhPd9_Q99gA8gHaEx%3Fpid%3DApi&q=0&b=1&p=0&a=0")
const age = ref(45);
const random = ref(Math.random());
</script>

<style scoped>
/* Les styles sont gérés par DaisyUI et Tailwind, donc pas besoin de CSS ici. */
</style>