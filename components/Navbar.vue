<template>
  <nav class="app-navbar">
    <div class="app-navbar-wrapper">
      <RouterLink
        to="/"
        class="brand-link animated-border flex flex-row items-center gap-4 px-4 hover:text-primary-500"
        @click="scrollToTop"
      >
        <SvgoLogo
          class="text-2xl"
          filled
        />
        {{ $t('brand') }}
      </RouterLink>
      <div
        class="mobile-button-wrapper"
        @click="toggleNav"
      >
        <button
          type="button"
          class="mobile-button"
        >
          <svg viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <ul
      :class="showMenu ? 'flex' : 'hidden'"
      class="app-navbar-menu"
    >
      <li
        v-for="section in sections"
        :key="section"
      >
        <a
          :href="`#${section}`"
          class="app-navbar-link animated-border"
          @click="closeNav"
        >
          {{ $t(`sections.${section}`) }}
        </a>
      </li>
    </ul>
    <ul
      :class="showMenu ? 'flex' : 'hidden'"
      class="app-navbar-menu2"
    >
      <li>
        <LocaleSelector />
      </li>
      <li>
        <ColorModeButton />
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
const showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
const closeNav = () => (showMenu.value = false);
const scrollToTop = () => {
  window.scrollTo(0, 0)
  closeNav()
}
const sections = ['about', 'experiences', 'contact']
</script>