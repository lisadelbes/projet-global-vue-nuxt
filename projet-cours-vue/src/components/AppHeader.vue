<template>
  <header class="navbar bg-base-100 shadow-lg rounded-box sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-8">
      <!-- Logo et nom de l'application -->
      <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl font-bold text-primary">
          Lisa App
        </a>
      </div>

      <!-- Menu de navigation principal pour les écrans larges -->
      <nav class="flex-none hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li class="rounded-box">
            <router-link to="/" class="hover:text-primary">Accueil</router-link>
          </li>
          <li class="rounded-box">
            <router-link to="/about" class="hover:text-primary">A propos</router-link>
          </li>
          <li class="rounded-box">
            <router-link to="/exo" class="hover:text-primary">Exo binding</router-link>
          </li>
          <li class="rounded-box">
            <router-link to="/exostyledynamic" class="hover:text-primary">Exo style Dynamic</router-link>
          </li>
          <li class="rounded-box">
            <router-link to="/evalstyledynamic"class="hover:text-primary">Eval style Dynamic</router-link>
          </li>
          <li class="rounded-box">
            <router-link to="/exo-films"class="hover:text-primary">Exo films</router-link>
          </li>
           <li class="rounded-box">
            <router-link to="/friendsList"class="hover:text-primary">Exo props friends</router-link>
          </li>
          <li class="rounded-box">
            <router-link to="/emit"class="hover:text-primary">Exo emit</router-link>
          </li>
            <li class="rounded-box">
            <router-link to="/exocom"class="hover:text-primary">Exo TP com</router-link>
          </li>
        </ul>
      </nav>

      <!-- Menu déroulant pour les écrans mobiles -->
      <div class="flex-none lg:hidden">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/" class="hover:text-primary">Accueil</a>
            </li>
            <li>
              <a href="#" class="hover:text-primary">À propos</a>
            </li>
            <li>
              <a href="#" class="hover:text-primary">Services</a>
            </li>
            <li>
              <a href="#" class="hover:text-primary">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
/* Pas de styles spécifiques car DaisyUI est utilisé. */
</style>

