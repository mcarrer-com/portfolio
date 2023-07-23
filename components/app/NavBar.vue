<template>
  <nav class="navbar">
    <div class="navbar__main">
      <RouterLink
        to="/"
        class="btn-brand fancy-btn"
        @click="scrollToTop"
      >
        <SvgoLogo filled />
        {{ $t('brand') }}
      </RouterLink>
      <button
        class="btn-menu"
        @click="toggleNav"
      >
        <SvgoHamburger />
      </button>
    </div>
    <div
      class="navbar__menus"
      :class="showMenu ? 'flex' : 'hidden'"
    >
      <ul>
        <li
          v-for="section in sections"
          :key="section"
        >
          <a
            :href="`#${section}`"
            class="fancy-btn"
            @click="closeNav"
          >
            {{ $t(`sections.${section}`) }}
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <LocaleSelector />
        </li>
        <li>
          <ColorModeButton />
        </li>
      </ul>
    </div>
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