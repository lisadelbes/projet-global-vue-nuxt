<template>
    <div class="max-w-md mx-auto space-y-4 p-4">
        <h2 class="text-2xl font-bold text-primary">🎻 Liste des Instruments</h2>

        <ul class="list-disc list-inside bg-base-100 p-4 rounded-lg shadow-md">
            <li v-for="instrument in instruments" :key="instrument.id">
                {{ instrument.name }}
            </li>
        </ul>

        <div v-if="loading" class="text-gray-500">Chargement…</div>
    </div>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue'
const { $supabase } = useNuxtApp()

const instruments = ref([])
const loading = ref(true)

// Fonction pour récupérer tous les instruments
async function fetchInstruments() {
    loading.value = true
    const { data, error } = await $supabase.from('instruments').select('*').order('id', { ascending: true })
    if (error) {
        console.error(error)
    } else {
        instruments.value = data
    }
    loading.value = false
}

// Charger au montage du composant
onMounted(fetchInstruments)
</script>