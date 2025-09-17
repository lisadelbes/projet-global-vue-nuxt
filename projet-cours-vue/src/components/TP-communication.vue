<script setup>
import { ref } from 'vue'
import oneUser from './oneUser.vue';
import newUser from './NewUser.vue';

const user = ref(["",""])
function ajoutuser(toto){
    user.value = { name: toto.nom, age: toto.age }
}

</script>

<template>

        <oneUser class="fond-violet" :name="user.name" :age="user.age" />
        <newUser @ajout="ajoutuser"> </newUser>

</template>

<style>

 .fond-violet {
  background-color: purple ;
  color: white ;
  padding: 10px ;
  border-radius: 8px;
}

</style>