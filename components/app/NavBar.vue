<template>
  <nav class="navbar">
    <div class="navbar__main">
      <NuxtLink
        :to="{ path: '/', hash:'#hero'}"
        class="btn-brand fancy-btn"
      >
        <SvgoLogo filled />
        <h3>{{ $t('brand') }}</h3>
      </NuxtLink>
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
          <NuxtLink
            :to="{ path: '/',hash:`#${section}`}"
            class="fancy-btn"
            @click="closeNav"
          >
            {{ $t(`sections.${section}`) }}
          </NuxtLink>
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
  const sections = ['about', 'experiences', 'contact']
  </script>