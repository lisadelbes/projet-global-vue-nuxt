<template>
  <h1> 
    Météo de {{ city }}
  </h1>
  <p> 
    <br>
    tempréature actuelle : {{ act_temp }} <br>
    température maximale : {{ temp_max }} <br>
    température minimale : {{ temp_min }} <br>
    condition actuelle : {{ act_condition }}
  </p>
</template>

<script setup lang="js">
import { ref, onMounted, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
const act_condition = ref("")
const temp_max = ref("")
const temp_min = ref("")
const act_temp = ref("")
const city = ref("")

const contactApiSecurePlus =  async () => {
    try {
        const rawData = await fetch('https://prevision-meteo.ch/services/json/marseille');
        console.log(rawData);
        
        // Vérification du statut de la réponse
        if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
            console.error("Erreur lors de la récupération des données : ", rawData.statusText);
            return; // Sortir de la fonction si la réponse n'est pas OK
        }

        const transformedData = await rawData.json();
        console.log(transformedData);
        console.log(transformedData.current_condition.condition);
      
        act_condition.value = transformedData.current_condition.condition;
        act_temp.value = transformedData.current_condition.tmp;
        temp_min.value = transformedData.fcst_day_0.tmin;
        temp_max.value = transformedData.fcst_day_0.tmax;
        city.value = transformedData.city_info.name;

    } catch (error) {
        console.error("Erreur lors de l'appel à l'API : ", error);
    }
}

onMounted(() => {
    contactApiSecurePlus();
    console.log('✅ Le composant est monté : on peut faire des appels API.')
})
</script>
