<template>
  <div class="container">
    <div @click="clickcard(1)" :class="{card1: isActive}">
      <h3>Card 1</h3>
    </div>
    <div @click="clickcard(2)" :class="{card2: isActivebis}">
      <h3>Card 2</h3>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue';
const isActive = ref(true);
const isActivebis = ref(true);

function clickcard(number){
    if (number == 1){
        isActive.value = !isActive.value;
    }
    if (number == 2){
        isActivebis.value = !isActivebis.value;
    }
}
</script>

<style scoped>
/* Le grand rectangle (container) */
.container {
  background-color: #6a0dad; /* violet */
  padding: 20px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* Styles spécifiques des 2 cards */
.card1 {
     padding: 16px;
  border-radius: 8px;
  width: 150px;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
  background-color: #40e0d0; /* turquoise */
}

.card2 {
    padding: 16px;
  border-radius: 8px;
  width: 150px;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
  background-color: #dda0dd; /* violet clair */
}
</style>
