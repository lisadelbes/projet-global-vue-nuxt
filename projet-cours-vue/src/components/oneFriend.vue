<script setup lang="js">
// OBJET :
const props = defineProps({
  id: String,
  unAminame: String,
  unAmimail: String,
  unAmiphone: String,
  premium: Boolean
})

    // <!-- Maintenant on va faire l'exercice sur les events avec $emit phase 1 :  -->
    // <!-- Dans le composant OneFriend.vue on va ajouter un bouton ou icone "Delete" qui va émettre un event "deleteFriend" -->
    // <!-- Dans OnFriend.vue -->
    // <!-- il faut ajouter un bouton ou icone "Delete" quand on click dessus on va émettre un event "deleteFriend" qui contiendra la props (l'id de l'ami)  -->
    // <!-- Dans FriendsList.vue ou ici /exercices/emit.vue-->
    // <!-- on va écouter (v-on) l'event "deleteFriend" qui va faire une FONCCION deleteInLesAmis-->
    // <!-- dans deleteInLesAmis on va recevoir en paramètre l'id de l'ami et on va se débrouiller pour supprimer l'ami du tableau (filter, splice, etc...) -->
const emit = defineEmits(["sup","ch"]);

function supprimer() {
  emit("sup",props.id);
}
function change(){
  emit("ch",props.id);
}

</script>

<template>
  <div class="card shadow-md bg-base-100 mb-4">
    <div class="card-body p-4 flex flex-col gap-2">
      <!-- En-tête -->
      <div class="flex justify-between items-center">
        <h2 class="card-title text-lg font-bold">
          {{ unAminame }}
        </h2>
        <span
          class="badge"
          :class="premium ? 'badge-primary' : 'badge-ghost'"
        >
          {{ premium ? 'Premium' : 'Standard' }}
        </span>
      </div>

      <!-- Infos -->
      <p class="text-sm text-gray-600">
        <span class="font-semibold">ID :</span> {{ id }}
      </p>
      <p class="text-sm">
        📧 {{ unAmimail }}
      </p>
      <p class="text-sm">
        📞 {{ unAmiphone }}
      </p>
        <button v-on:click="supprimer" class="btn-sup">
        Clique ici pour supprimer
        </button>
      <button @click="change" class="btn-change">
      Clique ici pour changer le statut
      </button>
      <p>Statut Premium : {{ premium }}</p>

    </div>
  </div>
</template>
