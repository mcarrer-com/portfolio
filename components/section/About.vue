<script setup lang="ts">
</script>

<template>
  <section id="about">
    <div class="section-container items-center h-full lg:h-fit flex flex-col lg:flex-row gap-4 lg:gap-10">
      <div class="lg:w-1/2">
        <h2>{{ $t('sections.about') }}</h2>
        <div class="text-sm">
          <p class="mt-2">
            {{ $t('about.text') }}
          </p>
          <p class="mt-2">
            {{ $t('about.contact-text') }}
          </p>
          <div class="mt-4 text-center">
            <a
              href="#contact"
              class="outline-btn"
            >{{ $t('about.contact-me') }}</a>
          </div>
        </div>
      </div>
      <div class="lg:w-1/2">
        <div class="w-fit h-fit animated-border">
          <nuxt-img
            src="/moi.png"
            sizes="sm:40vw lg:400px"
            class="rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.context {
  height: 100%;
  width: 100%;
  position: absolute;
}

</style>