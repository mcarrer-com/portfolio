<template>
  <nav class="navbar">
    <div class="navbar__main">
      <a href="#" class="btn-brand fancy-btn font-black" @click="scrollToTop()">
        <SvgoLogo filled />
        <span>{{ $t("brand") }}</span>
      </a>
      <button class="btn-menu" @click="toggleNav">
        <SvgoHamburger />
      </button>
    </div>
    <div class="navbar__menus" :class="showMenu ? 'flex' : 'hidden'">
      <ul>
        <li v-for="section in sections" :key="section">
          <a :href="`#${section}`" class="fancy-btn" @click="closeNav">
            {{ $t(`sections.${section}`) }}
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <AppLocaleSelector />
        </li>
        <li>
          <AppColorModeButton />
        </li>
      </ul>
    </div>
  </nav>
</template>


<script setup lang="ts">
const showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
const closeNav = () => (showMenu.value = false);
const sections = ["about", "experiences", "contact"];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>
