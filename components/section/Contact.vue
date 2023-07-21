<script setup lang="ts">

const data = ref({ name: '', email: '', message:'' })

const onSubmit = () => {
  alert('youhou')
}

</script>

<template>
  <section id="contact">
    <div class="section-container items-center h-full lg:h-fit flex flex-col lg:flex-row gap-4 lg:gap-10 text-left">
      <div class="lg:w-1/3">
        <h2>{{ $t('sections.contact') }}</h2>
        <div class="text-sm">
          <p class="mt-2">
            {{ $t('contact.text') }}
          </p>
        </div>
      </div>
      <div class="lg:w-2/3">
        <form
          @submit.prevent="onSubmit"
        >
          <UFormGroup
            name="name"
            :label="$t('contact.name')"
          >
            <UInput
              v-model="data.name"
              icon="i-heroicons-user"
            />
          </UFormGroup>
          <UFormGroup
            name="email"
            :label="$t('contact.email')"
            class="mt-2"
          >
            <UInput
              v-model="data.email"
              icon="i-heroicons-envelope"
            />
          </UFormGroup>
          <UFormGroup
            name="message"
            :label="$t('contact.message')"
            class="mt-2"
          >
            <UTextarea
              v-model="data.message"
            />
          </UFormGroup>
          <UButton
            type="submit"
            color="primary"
            variant="outline"
            class="mt-2"
          >
            {{ $t('contact.submit') }}
          </UButton>
        </form>
      </div>
    </div>
  </section>
</template>