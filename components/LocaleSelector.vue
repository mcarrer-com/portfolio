<script setup lang="ts">
const { locale } = useI18n()

const locales = ref([
  {value: 'en', name: 'English'},
  {value: 'fr', name: 'Français'}
])
</script>

<template>
  <ClientOnly>
    <USelect
      v-model="locale"
      :options="locales"
      option-attribute="name"
    />
  </ClientOnly>
</template>