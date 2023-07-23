<template>
  <form
    name="contact"
    method="POST"
    netlify-honeypot="bot-field"
    data-netlify-recaptcha="true"
    data-netlify="true"
    class="vertical-content"
  >
    <input
      type="hidden"
      name="form-name"
      value="contact"
    >
    
    <p class="hidden">
      <label>
        Don’t fill this out if you’re human: <input name="bot-field">
      </label>
    </p>

    <UFormGroup
      name="name"
      :label="$t('contact.name')"
    >
      <UInput icon="i-heroicons-user" />
    </UFormGroup>

    <UFormGroup
      name="email"
      :label="$t('contact.email')"
    >
      <UInput icon="i-heroicons-envelope" />
    </UFormGroup>

    <UFormGroup
      name="message"
      :label="$t('contact.message')"
    >
      <UTextarea />
    </UFormGroup>

    <div data-netlify-recaptcha="true" />

    <div class="btn-group">
      <UButton
        type="submit"
        color="primary"
        :label="$t('contact.submit')"
      />
    </div>
  </form>
</template>