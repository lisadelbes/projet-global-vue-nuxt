// /stores/demo.ts
// ✅ Définition d’un store simple avec Pinia
// (pas besoin d’importer defineStore avec Nuxt)

import {defineStore} from "pinia";
import { ref , computed } from 'vue';

export const useDemoStore = defineStore("demo", () => {
  // État
  const count = ref(0);
  const message = ref("Bienvenue dans Pinia 👋");

  // Getter (calculé)
  const double = computed(() => count.value * 2);

  // Actions
  function increment() {
    count.value++;
  }

  function reset() {
    count.value = 0;
  }

  // On expose les données et méthodes
  return { count, message, double, increment, reset };
});