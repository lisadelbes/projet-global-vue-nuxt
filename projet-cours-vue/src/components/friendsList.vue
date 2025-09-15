<script setup>
import { ref } from 'vue'
import oneFriend from './oneFriend.vue';


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

</script>

<template>
    <one-friend v-for="item in lesAmis" v-bind:id="item.id" v-bind:unAminame="item.name" v-bind:unAmiphone="item.phone" v-bind:unAmimail="item.email" v-bind:premium= "item.premium"> 
    </one-friend>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>