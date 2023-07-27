<script setup lang="ts">
import ContactForm from './Form.vue'
</script>

<template>
  <div class="section-wrapper">
    <div class="vertical-content">
      <h2>{{ $t('sections.contact') }}</h2>
      <p>{{ $t('contact.text') }}</p>
    </div>
    <div>
      <ContactForm />
    </div>
  </div>
</template>
