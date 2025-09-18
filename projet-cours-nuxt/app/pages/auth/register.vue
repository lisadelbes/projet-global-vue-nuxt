<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/10">
        <div class="card w-full max-w-md shadow-2xl bg-base-100">
            <div class="card-body">
                <h1 class="text-3xl font-bold text-center text-primary mb-6">
                    Créer un compte 🎵
                </h1>

                <!-- Message erreur -->
                <div v-if="errorMessage" class="alert alert-error shadow-lg mb-4">
                    <span>{{ errorMessage }}</span>
                </div>

                <form @submit.prevent="handleRegister" class="space-y-4">
                    <!-- Display Name -->
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text font-medium">Nom affiché</span>
                        </label>
                        <input v-model="displayName" type="text" placeholder="Votre pseudo"
                            class="input input-bordered input-primary w-full" required />
                    </div>

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
                        S'inscrire
                    </button>
                </form>

                <p class="text-center mt-6 text-sm text-base-content">
                    Déjà un compte ?
                    <NuxtLink to="/auth/login" class="link link-secondary font-medium">
                        Se connecter
                    </NuxtLink>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
const email = ref('')
const displayName = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

// const { signUp } = useSupabaseAuth()
const { signUpWithPseudo } = useSupabaseAuth()

const handleRegister = async () => {
    try {
        await signUpWithPseudo(email.value, password.value, displayName.value)
        router.push('/') // redirige après inscription
    } catch (error) {
        errorMessage.value = error.message
    }
}
</script>