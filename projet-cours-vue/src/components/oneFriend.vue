<script setup lang="js">
// OBJET :
defineProps({
  id: String,
  unAminame: String,
  unAmimail: String,
  unAmiphone: String,
  premium: Boolean
})
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
    </div>
  </div>
</template>
