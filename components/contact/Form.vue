<template>
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    class="vertical-content"
  >
    <input
      type="hidden"
      name="form-name"
      value="contact"
    >

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

    <div class="btn-group">
      <UButton
        type="submit"
        color="primary"
        :label="$t('contact.submit')"
      />
    </div>
  </form>
</template>