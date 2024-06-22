<script setup lang="ts">

const count = 20

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

</script>

<template>
  <div class="squares bg-gradient-to-r from-cyan-500 to-blue-500">
    <ul>
      <li
        v-for="i in count"
        :key="i"
        :style="{
          'left': `${getRandomIntInclusive(0, 85)}%`,
          'width': `${getRandomIntInclusive(20, 150)}px`,
          'aspect-ratio': '1 / 1',
          'animation-delay': `${getRandomIntInclusive(0, 7)}s`,
          'animation-duration': `${getRandomIntInclusive(10, 45)}s`
        }"
      />
    </ul>
    <div class="squares__inner">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.squares {
  width: 100%;
  height: 100vh;

  &>ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &>li {
      position: absolute;
      display: block;
      list-style: none;
      background: rgba(255, 255, 255, 0.2);
      animation: animate 25s linear infinite;
      bottom: -150px;
    }

    @keyframes animate {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
      }

      100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
      }
    }
  }

  &__inner {
    width: 100%;
    position: absolute;
    top: 50vh;
    translate: 0 -50%;
    text-align: center;
  }
}
</style>