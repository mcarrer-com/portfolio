<script setup lang="ts">
import getExperiences from "~/data/experiences";
import ExperienceCard from "./Card.vue";

const { t } = useI18n();
const experiences = computed(() => getExperiences(t));
</script>

<template>
  <section id="experiences">
    <div class="section-wrapper container mx-auto" style="align-items: start">
      <div class="vertical-content vertical-content__large">
        <div class="vertical-content">
          <h2>{{ $t("sections.experiences") }}</h2>
          <p>{{ $t("experiences.text1") }}</p>
          <p>{{ $t("experiences.text2") }}</p>
          <p>{{ $t("experiences.text3") }}</p>
        </div>
        <div class="mx-auto">
          <a
            class="fancy-btn flex items-center justify-center gap-2"
            href="/Michael_CARRER_CV.pdf"
            download
          >
            <SvgoDownload />
            <span>{{ $t("experiences.download") }}</span>
          </a>
        </div>
      </div>
      <div class="overflow-auto">
        <ul class="vertical-content margin-even">
          <li v-for="(exp, i) in experiences" :key="i">
            <ExperienceCard :experience="exp" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
