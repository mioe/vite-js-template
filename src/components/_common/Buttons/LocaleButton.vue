<script setup>
import { useI18n } from 'vue-i18n'

const { availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  localStorage.setItem('i18n', locale.value)
}
</script>

<template>
  <button
    class="justify-center uppercase"
    @click="toggleLocales()"
  >
    {{ locale }}
  </button>
</template>
