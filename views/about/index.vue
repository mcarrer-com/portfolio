<template>
  <div class="section-wrapper container mx-auto">
    <div class="vertical-content">
      <h2>{{ $t('sections.about') }}</h2>
      <p>{{ $t('about.text1') }}</p>
      <p>{{ $t('about.text2') }}</p>
      <div class="btn-group">
        <UButton
          color="primary"
          :label="$t('about.contact-me')"
          aria-label="Contact Me"
          @click="$router.push('#contact')"
        />
      </div>
    </div>
    <div>
      <div class="fancy-btn">
        <nuxt-img
          src="/moi.png"
          format="webp"
          width="400px"
          height="400px"
          sizes="sm:100vw md:50vw lg:400px"
          class="img mx-auto"
          alt="me"
        />
      </div>
    </div>
  </div>
</template>