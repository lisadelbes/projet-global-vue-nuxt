// middleware/auth.ts
import { useSupabaseAuth } from "~/composables/useSupabaseAuth";

export default defineNuxtRouteMiddleware((to, from) => {
  // On récupère le user depuis notre composable
  const { user } = useSupabaseAuth();

  // Si l'utilisateur n'est pas connecté, on redirige vers /login
  if (!user.value) {
    // navigateTo("/auth/login"); on utilise le navigateTo de nuxt3 & 4(c'est leur super fonctions qui gère ultra bien le vue-router)
    return navigateTo("/auth/login");
  }
});
