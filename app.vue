<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);


nuxtApp.hook('app:beforeMount', () => {
  console.log('loading: true (app)')
  loading.value = true;
}); 

nuxtApp.hook("page:start", () => {
  console.log('loading: true (page)')
  loading.value = true;
}); 

nuxtApp.hook("page:finish", () => {
  console.log('loading: false')
  loading.value = false;
});
</script>

<template>
  <div class="h-screen">
    <div
      v-if="loading"
      class="fixed left-0 top-0 h-0.5 w-full z-50 bg-green-500"
    />
    <NuxtLayout>
      <RouterView />
    </NuxtLayout>
  </div>
</template>
