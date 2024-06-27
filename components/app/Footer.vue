<template>
  <div class="text-center p-3">
    <p>
      © {{ year }} by Michael Carrer
    </p>
  </div>
</template>

<script lang="ts" setup>

const year = new Date().getFullYear();

</script>
