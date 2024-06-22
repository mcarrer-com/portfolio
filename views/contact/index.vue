<script setup lang="ts">
import ContactForm from './Form.vue'
</script>

<template>
  <div class="section-wrapper container mx-auto">
    <div class="vertical-content">
      <h2>{{ $t('sections.contact') }}</h2>
      <p>{{ $t('contact.text1') }}</p>
      <p>{{ $t('contact.text2') }}</p>
      <p>{{ $t('contact.text3') }}</p>
      <p>{{ $t('contact.text4') }}</p>
    </div>
    <div>
      <ContactForm />
    </div>
  </div>
</template>
