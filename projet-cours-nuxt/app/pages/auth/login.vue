<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/10">
        <div class="card w-full max-w-md shadow-2xl bg-base-100">
            <div class="card-body">
                <h1 class="text-3xl font-bold text-center text-primary mb-6">
                    Connexion 🎵
                </h1>

                <!-- Message erreur -->
                <div v-if="errorMessage" class="alert alert-error shadow-lg mb-4">
                    <span>{{ errorMessage }}</span>
                </div>

                <form @submit.prevent="handleLogin" class="space-y-4">
                    <!-- Email -->
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text font-medium">Email</span>
                        </label>
                        <input v-model="email" type="email" placeholder="votre@email.com"
                            class="input input-bordered input-primary w-full" required />
                    </div>

                    <!-- Mot de passe -->
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text font-medium">Mot de passe</span>
                        </label>
                        <input v-model="password" type="password" placeholder="******"
                            class="input input-bordered input-primary w-full" required />
                    </div>

                    <button type="submit" class="btn btn-primary w-full mt-4">
                        Se connecter
                    </button>
                </form>

                <p class="text-center mt-6 text-sm text-base-content">
                    Pas encore de compte ?
                    <NuxtLink to="/auth/register" class="link link-secondary font-medium">
                        S'inscrire
                    </NuxtLink>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSupabaseAuth } from '~/composables/useSupabaseAuth'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()
const { signIn } = useSupabaseAuth()

const handleLogin = async () => {
    try {
        await signIn(email.value, password.value)
        router.push('/') // redirige après connexion
    } catch (error) {
        errorMessage.value = error.message
    }
}
</script>