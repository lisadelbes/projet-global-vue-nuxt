<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/10">
      <div class="card w-full max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <h1 class="text-3xl font-bold text-center text-primary mb-6">
            Bienvenue sur l'accueil 🎵
          </h1>
  
          <!-- Affichage utilisateur connecté -->
          <div v-if="user" class="space-y-4 text-center">
            <div class="avatar placeholder mb-4">
              <div class="bg-primary text-primary-content rounded-full w-24">
                <span class="text-3xl">{{ initials }}</span>
              </div>
            </div>
  
            <p class="text-xl font-semibold">
              {{ user.user_metadata?.display_name || 'Nom non défini' }}
            </p>
            <p class="text-base text-base-content/70">
              {{ user.email }}
            </p>
  
            <button @click="handleLogout" class="btn btn-outline btn-error mt-4">
              Se déconnecter
            </button>
          </div>
  
          <div v-else class="text-center">
            <p class="text-base-content/70 mb-4">Vous n’êtes pas connecté.</p>
            <NuxtLink to="/auth/login" class="btn btn-primary">
              Se connecter
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
const { $supabase }: any = useNuxtApp()

  const user = ref<any>(null)
  
  // On récupère l’utilisateur au montage
  onMounted(async () => {
    const { data } = await $supabase.auth.getUser()
    user.value = data.user
  })
  
  // Initiales pour l’avatar
  const initials = computed(() => {
    if (!user.value) return '?'
    const name = user.value.user_metadata?.display_name || user.value.email || ''
    return name.substring(0, 2).toUpperCase()
  })
  
  // Déconnexion
  const handleLogout = async () => {
    await $supabase.auth.signOut()
    user.value = null
  }
  </script>
  