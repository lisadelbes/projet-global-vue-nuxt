<script setup>
import { ref } from 'vue'
import oneFriend from './oneFriend.vue';

import newFriend from './NewFriends.vue';

const lesAmis = ref([
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'lasticot2',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'kimonoSurUnFrigo',
        name: "Steven Seagal",
        phone: '+338765477',
        email: 'steven@seagal.com',
        premium: true
    },
    {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    }
]);

function supprimerdata(id_child) {
  lesAmis.value = lesAmis.value.filter((ami) => ami.id !== id_child);
}

function changepremium(id_child){
    const ami = lesAmis.value.find((a) => a.id === id_child);
    ami.premium = !ami.premium;
    console.log(ami)
}

function ajoutamis(toto){
    console.log(toto);
    lesAmis.value.push(toto);
}
</script>

<template>
    <new-friend @ajout="ajoutamis"> </new-friend>


    <one-friend v-for="item in lesAmis" v-bind:id="item.id" v-bind:unAminame="item.name" v-bind:unAmiphone="item.phone" v-bind:unAmimail="item.email" v-bind:premium= "item.premium" v-on:sup="supprimerdata" v-on:ch="changepremium"> 
    <!-- Utilisez le composant comme ceci -->
    </one-friend>
     <!-- <p @click="ajoutamis(item, index)"  class="text-gray-500">
                Nouvel ami : {{ item }}
    </p> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>