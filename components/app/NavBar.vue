<template>
  <nav class="navbar">
    <div class="navbar__main">
      <RouterLink
        :to="{ path: '/',hash:'#hero'}"
        class="btn-brand fancy-btn"
      >
        <SvgoLogo filled />
        <h3>{{ $t('brand') }}</h3>
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
          <RouterLink
            :to="{ path: '/',hash:`#${section}`}"
            class="fancy-btn"
            @click="closeNav"
          >
            {{ $t(`sections.${section}`) }}
          </RouterLink>
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
  const sections = ['about', 'experiences', 'contact']
  </script>