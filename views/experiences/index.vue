<script setup lang="ts">
import getExperiences from '~/data/experiences'
import ExperienceCard from './Card.vue'

const { t } = useI18n()
const experiences = computed(() => getExperiences(t))
</script>

<template>
  <div
    class="section-wrapper container mx-auto"
    style="align-items: start;"
  >
    <div class="vertical-content">
      <h2>{{ $t('sections.experiences') }}</h2>
      <p>{{ $t('experiences.text1') }}</p>
      <p>{{ $t('experiences.text2') }}</p>
      <p>{{ $t('experiences.text3') }}</p>
    </div>
    <div class="overflow-auto">
      <ul class="vertical-content margin-even">
        <li
          v-for="(exp, i) in experiences"
          :key="i"
        >
          <ExperienceCard :experience="exp" />
        </li>
      </ul>
    </div>
  </div>
</template>

