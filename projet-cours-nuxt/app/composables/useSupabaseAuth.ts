import { ref, onMounted } from "vue";
import { useNuxtApp } from "#app";
// On pourra typer avec une interface User
const user = ref<any>(null);

export function useSupabaseAuth() {
  const { $supabase }: any = useNuxtApp();

  // Login avec mail + mot de passe
  const signIn = async (email: string, password: string) => {
    const { data, error } = await $supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    user.value = data.user;
    return data.user;
  };

  // Register avec mail + mot de passe
  const signUp = async (email: string, password: string) => {
    const { data, error } = await $supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    user.value = data.user;
    return data.user;
  };

  // Register avec mail + mot de passe + pseudo ou display name dans supabase mais BUG pour le moment
  const signUpWithPseudo = async (
    email: string,
    password: string,
    pseudo: string
  ) => {
    const { data, error } = await $supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          pseudo,
        },
      },
    });
    if (error) throw error;
    user.value = data.user;
    return data.user;
  };

  // Logout
  const signOut = async () => {
    await $supabase.auth.signOut();
    user.value = null;
  };

  // Surveille la session (reconnexion auto)
  onMounted(async () => {
    const { data } = await $supabase.auth.getSession();
    user.value = data.session?.user || null;
    $supabase.auth.onAuthStateChange((_event: any, session: any) => {
      user.value = session?.user || null;
    });
  });

  //Récupérer l'utilisateur connecté
  const getUser = async () => {
    const { data } = await $supabase.auth.getUser();
    user.value = data.user;
    return data.user;
  };

  return { user, signIn, signUp, signUpWithPseudo, signOut, getUser };
}
