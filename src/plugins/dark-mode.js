import { watch, computed } from 'vue'
import { usePreferredDark, useToggle, useStorage } from '@vueuse/core'

const preferredDark = usePreferredDark()

export const colorSchema = useStorage('color-schema', 'auto')

export const isDark = computed({
  get() {
    return colorSchema.value === 'auto' ? preferredDark.value : colorSchema.value === 'dark'
  },
  set(v) {
    if (v === preferredDark.value)
      colorSchema.value = 'auto'
    else
      colorSchema.value = v ? 'dark' : 'light'
  },
})

export const toggleDark = useToggle(isDark)

watch(
  isDark,
  v => typeof document !== 'undefined' && document.documentElement.classList.toggle('dark', v),
  { immediate: true },
)
