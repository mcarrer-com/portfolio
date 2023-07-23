<template>
  <div class="section-wrapper">
    <div class="vertical-content">
      <h2>{{ $t('sections.about') }}</h2>
      <p>{{ $t('about.text') }}</p>
      <p>{{ $t('about.contact-text') }}</p>
      <div class="btn-group">
        <UButton
          color="primary"
          :label="$t('about.contact-me')"
          @click="$router.push('#contact')"
        />
      </div>
    </div>
    <div>
      <div class="fancy-btn">
        <nuxt-img
          src="/moi.png"
          width="400px"
          sizes="sm:100vw md:50vw lg:400px"
          class="img mx-auto"
        />
      </div>
    </div>
  </div>
</template>