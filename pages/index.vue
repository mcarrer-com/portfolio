<script setup lang="ts">
useSeoMeta({
  title: 'Michaël Carrer - Developer Full Stack & Software',
  ogTitle: 'Michaël Carrer - Developer Full Stack & Software',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <main>
    <section id="hero">
      <Hero />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="experiences">
      <Experiences />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </main>
</template>