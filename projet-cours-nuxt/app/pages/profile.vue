<script setup lang="js">
// ✅ Protection de la page via middleware
definePageMeta({
  middleware: 'auth' // correspond à middleware/auth.ts
})

// import { useSupabaseAuth } from '~/composables/useSupabaseAuth'

// ✅ On récupère le user depuis ton composable
const { user } = useSupabaseAuth()
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">Page protégée</h1>
    <p>Bienvenue {{ user?.email }}</p>

    <div v-if="user?.user_metadata?.display_name" class="mt-2 text-lg">
      Nom affiché : {{ user.user_metadata.display_name }}
    </div>
  </div>
</template>
