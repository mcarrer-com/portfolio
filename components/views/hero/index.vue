<template>
  <section id="hero">
    <AppSquares>
      <h1>{{ $t('hero.freelance') }}</h1>
      <h2>
        {{ $t('hero.building') }}
        <AppSwapSpan
          :texts="[ $t('hero.websites'), $t('hero.softwares') ]"
          :period="2000"
        />
      </h2>
    </AppSquares>
  </section>
</template>