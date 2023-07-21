<script setup lang="ts">

const { t } = useI18n()

type Experience = {
  dateIn: string
  dateOut: string
  roles: string[]
  company: string
  summary: string
  tags: string[]
}

const experiences = computed<Experience[]>(() => [
  {
    dateIn: '2022',
    dateOut: '2023',
    roles: [t('experiences.roles.full-stack-developer')],
    company: t('experiences.personal-project'),
    summary: t('experiences.summary.perso'),
    tags: ['Nuxt 2', 'Nuxt 3', 'Vuejs', 'Javascript', 'Typescript', 'SCSS', 'Python', 'PostgreSQL']
  },
  {
    dateIn: '2014',
    dateOut: '2021',
    roles: [t('experiences.roles.it-department-manager'), t('experiences.roles.full-stack-developer'), t('experiences.roles.software-developer')],
    company: 'Electrical Design',
    summary: t('experiences.summary.ed'),
    tags: ['J2EE', 'Java', 'JSP', 'Maven', 'Hibernate', 'SQL', 'C#', 'WPF', 'VBScript']
  },
  {
    dateIn: '2012',
    dateOut: '2013',
    roles: [t('experiences.roles.software-developer')],
    company: 'ABW Concept',
    summary: t('experiences.summary.abw'),
    tags: ['VB.Net', 'SQL']
  }
])

</script>

<template>
  <section id="experiences">
    <div class="section-container items-center h-full lg:h-fit flex flex-col lg:flex-row gap-4 lg:gap-10 text-left">
      <div class="lg:w-1/3">
        <h2>{{ $t('sections.experiences') }}</h2>
        <div class="text-sm">
          <p class="mt-2">
            {{ $t('experiences.text') }}
          </p>
        </div>
      </div>
      <div class="lg:w-2/3">
        <ul>
          <li
            v-for="(exp, i) in experiences"
            :key="i"
            class="mb-4"
          >
            <div class="flex flex-col lg:flex-row gap-2">
              <div class="lg:w-1/4 text-gray-600 font-bold lg:pt-5 whitespace-nowrap">
                {{ exp.dateIn }} - {{ exp.dateOut }}
              </div>
              <div class="lg:w-3/4">
                <UCard class="card">
                  <template #header>
                    <h3
                      v-for="(role, j) in exp.roles"
                      :key="`role_${i}_${j}`"
                    >
                      {{ role }}
                    </h3>
                    <span>{{ exp.company }}</span>
                  </template>

                  {{ exp.summary }}

                  <template #footer>
                    <UBadge
                      v-for="(tag, j) in exp.tags"
                      :key="`tag_${i}_${j}`"
                      color="primary"
                      variant="solid"
                      class="m-1"
                    >
                      {{ tag }}
                    </UBadge>
                  </template>
                </UCard>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  @apply hover:ring-primary-100 hover:divide-primary-100 hover:bg-primary-100/25 dark:hover:ring-primary-900/50 dark:hover:divide-primary-900/50 dark:hover:bg-primary-100/5;
}
</style>