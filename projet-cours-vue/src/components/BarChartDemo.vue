<template>
    <div class="card bg-base-200 shadow-xl p-6 max-w-xl mx-auto">
        <h2 class="text-2xl font-bold text-primary mb-4">📊 Exemple Chart.js</h2>

        <div class="h-72">
            <!-- On affiche le graphique Bar de vue-chartjs -->
            <Bar :data="chartData" :options="chartOptions" />    
        </div>
        <button @click="dynamicData+=50" class="btn"> Clique ici pour +50</button>
        <button @click="dynamicData = Math.random()*1000" class="btn"> Clique pour nombre random</button>
    </div>
</template>

<script setup lang="ts">
/**
 * 1. Importer Chart.js et vue-chartjs
 */
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import { computed , ref } from 'vue'

/**
 * 2. Enregistrer les modules Chart.js (obligatoire)
 */
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
/**
 * 3. Définir les données du graphique
 */
// 2️⃣ Valeur dynamique
const dynamicData = ref(2000)

// autre solution possible : function "augmenter"
// function augmenter(){
//     dynamicData.value = dynamicData.value +50;
// }

// 3️⃣ chartData recalculé automatiquement avec computed dès q'une des dépendances (variables) change ici la ref dynamicData
const chartData = computed(() => ({
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
    datasets: [
        {
            label: 'Ventes (€)',
            // on utilise dynamicData.value pour Janvier
            data: [dynamicData.value, 1500, 900, 2000, 1800],
            backgroundColor: '#3b82f6'
        }
    ]
}))

/**
 * 4. Définir les options
 */
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            labels: {
                color: '#374151'
            }
        },
        title: {
            display: true,
            text: 'Evolution des ventes par mois'
        }
    },
    scales: {
        x: {
            ticks: { color: '#374151' }
        },
        y: {
            ticks: { color: '#374151' }
        }
    }
}
</script>