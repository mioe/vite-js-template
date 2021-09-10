<script setup>
import { computed } from 'vue'
import { useStore } from '@/stores/main'
const store = useStore()
const {
  changeName,
} = store

const name = computed(() => store.name)
const greetings = computed(() => store.greetings)
const handleInput = ev => changeName(ev.target.value)
</script>

<template>
  <section>
    <h2>TestingPinia</h2>
    <div class="space-y-[5px]">
      <label for="hello">
        <p>greetings = <b>{{ greetings }}</b></p>
        <input
          id="hello"
          type="text"
          :value="name"
          @input="handleInput"
        >
      </label>
    </div>
  </section>
</template>
