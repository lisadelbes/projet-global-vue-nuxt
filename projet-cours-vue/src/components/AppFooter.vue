<template>
  <footer class="footer p-10 bg-base-300 text-base-content rounded-box shadow-lg">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Section "À propos" -->
        <div>
          <span class="footer-title">À propos de nous</span>
          <p class="text-sm text-gray-500">
            Votre application est construite avec ❤️ et Nuxt.
          </p>
        </div>

        <!-- Liens de navigation -->
        <div>
          <span class="footer-title">Navigation</span>
          <a href="#" class="link link-hover">Accueil</a>
          <a href="#" class="link link-hover">À propos</a>
          <a href="#" class="link link-hover">Services</a>
          <a href="#" class="link link-hover">Contact</a>
        </div>

        <!-- Section "Légal" -->
        <div>
          <span class="footer-title">Légal</span>
          <a href="#" class="link link-hover">Conditions d'utilisation</a>
          <a href="#" class="link link-hover">Politique de confidentialité</a>
          <a href="#" class="link link-hover">Politique de cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Pas de logique spécifique pour un composant de footer.
</script>

<style scoped>
/* Les styles sont gérés par DaisyUI et Tailwind, donc pas besoin de CSS ici. */
</style>