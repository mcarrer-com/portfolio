<template>
  <div :class="{ 'open': isOpen }" class="hamburger">
    <span class=" bg-gray-700 dark:bg-gray-100" />
    <span class=" bg-gray-700 dark:bg-gray-100" />
    <span class=" bg-gray-700 dark:bg-gray-100" />
  </div>
</template>

<script setup>
const props = defineProps({ isOpen: Boolean })
const { isOpen } = toRefs(props)
</script>


<style scoped>
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 30px;
  height: 24px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
}

.hamburger span {
  height: 3px;
  width: 100%;
  transition: all 0.3s ease-in-out;
  position: relative;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg);
  top: 10px;
  position: absolute;
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg);
  top: 10px;
  position: absolute;
}
</style>


