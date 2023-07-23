<script setup lang="ts">
import getExperiences from '~/data/experiences'

const { t } = useI18n()
const experiences = computed(() => getExperiences(t))
</script>

<template>
  <div class="section-wrapper">
    <div class="vertical-content">
      <h2>{{ $t('sections.experiences') }}</h2>
      <p>{{ $t('experiences.text') }}</p>
    </div>
    <div>
      <ul class="vertical-content margin-even">
        <li
          v-for="(exp, i) in experiences"
          :key="i"
        >
          <ExperiencesItem :experience="exp" />
        </li>
      </ul>
    </div>
  </div>
</template>