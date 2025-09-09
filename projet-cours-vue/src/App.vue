<template>
  <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
      <p> {{ toto }} </p>
    </div>
  </div>
</div>
</template>

<script setup lang="js">

const toto = "Lisa DELBES";

</script>

<style scoped>
</style>