<script setup lang="ts">
type TProps = { texts: string[], period: number }
const props = defineProps<TProps>()
const { texts, period } = toRefs(props)

const activeIndex = ref(0)
const interval = ref<NodeJS.Timer>()

onMounted(() => {
    interval.value = setInterval(() => {
        if(activeIndex.value === texts.value.length - 1) {
            activeIndex.value = 0
        } else {
            activeIndex.value++
        }
    }, period.value)
})
</script>

<template>
  <span class="swap-span">
    <div
      v-for="(text, i) in texts"
      :key="i"
    >
      <span
        v-if="activeIndex === i"
        class="swap-animation"
      >{{ text }}</span>
    </div>
  </span>
</template>

<style scoped>

.swap-span {
  display: inline-block;
  padding: .2rem .5rem;
  background-color: dodgerblue;
  color: white;
  border-radius: .5rem;
  font-weight: 900;
}

.swap-animation {
    animation: fade-up 1s both;
    animation-iteration-count: 1;
    animation-duration: 1000ms;
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

@keyframes fade-up {
    0% {
        opacity: 0;
        transform: translateY(2rem);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

</style>