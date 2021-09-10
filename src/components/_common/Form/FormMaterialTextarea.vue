<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits([
  'update:modelValue',
])

const isFocus = ref(false)

const valueIsNotEmpty = computed(() =>
  props.modelValue
    ? props.modelValue.length > 0
    : false,
)

const onFocus = () => { isFocus.value = true }
const onBlur = () => { isFocus.value = false }
const onInput = ev => { emit('update:modelValue', ev.target.value) }
</script>

<template>
  <label
    :for="id"
    class="relative inline-block w-full border bg-$primary"
    :class="{'border-$rare': isFocus && !disabled}"
  >
    <textarea
      :id="id"
      :value="modelValue"
      :disabled="disabled"
      placeholder=""
      class="clear w-full min-h-[34px] px-[10px] pt-[16px] pb-[2px] text-[16px] focus:outline-none bg-transparent"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
    />
    <span
      class="absolute inline-block top-0 left-[10px] text-[16px] transform"
      :class="isFocus || valueIsNotEmpty
        ? 'translate-y-[2px] scale-70'
        : 'translate-y-[10px] scale-100'
      "
      style="transition: transform var(--transition); transform-origin: top left;"
    >
      {{ placeholder }}
    </span>
  </label>
</template>
