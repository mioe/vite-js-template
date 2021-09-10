<script setup>
import { ref } from 'vue'

const text = ref('')
</script>
<template>
  <div>
    <h2>TestingForm</h2>
    <div class="space-y-[5px]">
      <FormMaterialInput
        v-model="text"
        placeholder="FormMaterialInput"
      />
      <FormMaterialTextarea
        v-model="text"
        placeholder="FormMaterialTextarea"
      />
    </div>
  </div>
</template>
