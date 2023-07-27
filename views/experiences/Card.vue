<script setup lang="ts">
type TProps = { experience: Experience }
const props = defineProps<TProps>()
const { experience } = toRefs(props)

</script>

<template>
  <UCard>
    <template #header>
      <small>{{ experience.dateIn }} - {{ experience.dateOut }}</small>
      <h3
        v-for="(role, i) in experience.roles"
        :key="i"
      >
        {{ role }}
      </h3>
      <small>{{ experience.company }}</small>
    </template>

    {{ experience.summary }}

    <template #footer>
      <UBadge
        v-for="(tag, i) in experience.tags"
        :key="i"
        color="primary"
        variant="solid"
        class="mr-1"
      >
        {{ tag }}
      </UBadge>
    </template>
  </UCard>
</template>