<script setup lang="ts">
import { useVuelidate, ErrorObject } from '@vuelidate/core'

const { required, email } = useValidators()

const state = reactive({
  name: '',
  email: '',
  message: ''
})

const rules = {
  name: { required },
  email: { required, email },
  message: { required },
}

const v$ = useVuelidate(rules, state)

const errors = computed(() => ({
  name: getFirstError(v$.value.name.$errors),
  email: getFirstError(v$.value.email.$errors),
  message: getFirstError(v$.value.message.$errors),
}))

function getFirstError(errors: ErrorObject[]) {
  if(errors && errors.length > 0) {
    return errors[0].$message.toString()
  } else {
    return undefined
  }
}

async function submit (payload: Event) {
  if (!await v$.value.$validate()) {
    payload.preventDefault()
    return
  }
  // perform async actions
}

</script>

<template>
  <form
    name="contact"
    method="post"
    netlify-honeypot="bot-field"
    data-netlify="true"
    class="vertical-content"
    @submit="submit"
  >
    <!-- to be detected by netlify -->
    <input
      type="hidden"
      name="form-name"
      value="contact"
    >
    
    <!-- netlify honeypot -->
    <p class="hidden">
      <label>
        Don’t fill this out if you’re human: <input name="bot-field">
      </label>
    </p>

    <!-- name -->
    <UFormGroup
      name="name"
      :label="$t('contact.name')"
      :error="errors.name"
    >
      <UInput
        v-model="state.name"
        icon="i-heroicons-user"
        @change="v$.name.$touch"
      />
    </UFormGroup>

    <!-- email -->
    <UFormGroup
      name="email"
      :label="$t('contact.email')"
      :error="errors.email"
    >
      <UInput
        v-model="state.email"
        icon="i-heroicons-envelope"
        @change="v$.email.$touch"
      />
    </UFormGroup>

    <!-- message -->
    <UFormGroup
      name="message"
      :label="$t('contact.message')"
      :error="errors.message"
    >
      <UTextarea 
        v-model="state.message"
        @change="v$.message.$touch"
      />
    </UFormGroup>

    <!-- submit -->
    <div class="btn-group">
      <UButton
        type="submit"
        color="primary"
        :disabled="v$.$invalid"
        :label="$t('contact.submit')"
      />
    </div>
  </form>
</template>