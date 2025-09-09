<template>
  <div class="min-h-screen flex flex-col bg-base-200 text-base-content">
    <!-- Navbar en haut de la page -->
    <AppHeader />
    <!-- Conteneur principal du contenu, centré et responsive -->
    <main class="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
      <!-- Ici on aura la router view -->
       <router-view></router-view>
    </main>
    <!-- Footer en bas de la page -->
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
// Pas de logique spécifique nécessaire ici,
// Nuxt gère automatiquement la mise en page
// avec les composants de layout.
</script>

<style>
/* Les styles globaux peuvent être ajoutés ici si nécessaire */
/* Par exemple, si vous n'avez pas de fichier main.css séparé */
</style>