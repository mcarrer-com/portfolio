<template>
  <div class="text-center p-3">
    <small>© {{ year }} by <b>Michael Carrer</b></small>
  </div>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear();
</script>
