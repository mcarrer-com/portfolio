<script setup lang="ts">
type TProps = { experience: Experience }
const props = defineProps<TProps>()
const { experience } = toRefs(props)
const summaryLines = computed(() => experience.value.summary.split('\n'))
</script>

<template>
  <UCard>
    <template #header>
      <small>{{ experience.dateIn }} - {{ experience.dateOut }}</small>
      <h3
        v-for="(role, i) in experience.roles"
        :key="i"
        class="text-lg font-bold"
      >
        {{ role }}
      </h3>
      <small>{{ experience.company }}</small>
    </template>

    <div>
      <ul class="divide-y divide-gray-200 dark:divide-gray-700">
        <li v-for="(line, i) in summaryLines" :key="i">
          {{ line }}
        </li>
      </ul>
    </div>

    <template #footer>
      <UBadge
        v-for="(tag, i) in experience.tags"
        :key="i"
        color="primary"
        variant="solid"
        class="mr-2"
      >
        {{ tag }}
      </UBadge>
    </template>
  </UCard>
</template>

<style scoped>
ul li:not(:first-child) {
  padding-top: 1rem;
  margin-top: 1rem;
}
</style>