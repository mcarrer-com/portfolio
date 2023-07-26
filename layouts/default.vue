<script setup lang="ts">
const loaded = ref(false)

onMounted(() => {
  loaded.value = true
})
</script>


<template>
  <div>
    <header>
      <AppNavBar />
    </header>
    <NuxtPage />
  </div>
</template>