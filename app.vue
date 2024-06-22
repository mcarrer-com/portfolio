<script setup lang="ts">
useSeoMeta({
  title: 'Michael Carrer - Developer Full Stack & Software',
  ogTitle: 'Michael Carrer - Developer Full Stack & Software',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://portfolio.mcarrer.com/logo.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="app-wrapper">
    <header>
      <AppNavBar />
    </header>
    <main>
      <section
        v-for="v in ['hero', 'about', 'experiences', 'contact']"
        :id="v"
        :key="v"
      >
        <RouterView :name="v" />
      </section>
    </main>
  </div>
</template>