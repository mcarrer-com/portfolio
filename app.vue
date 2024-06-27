<template>
  <div v-if="loaded" class="app-wrapper">
    <header>
      <AppNavBar />
    </header>
    <main>
      <ViewsHero/>
      <ViewsAbout/>
      <ViewsExperiences/>
      <ViewsContact/>
    </main>
    <footer>
      <AppFooter />
    </footer>
  </div>
  <AppLoader v-else />
</template>


<script setup lang="ts">
const loaded = ref(false);

useSeoMeta({
  title: "Michael Carrer - Developer Full Stack & Software",
  ogTitle: "Michael Carrer - Developer Full Stack & Software",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://portfolio.mcarrer.com/logo.png",
  twitterCard: "summary_large_image",
});

onMounted(() => (loaded.value = true));
</script>