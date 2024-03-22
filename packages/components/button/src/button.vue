<template>
  <button class="openx-button" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
// packages/button/src/button.vue
import { hello } from '@ccthb-ui/shared'

const props = withDefaults(defineProps<{
  text?: string
}>(), {
  text: 'World',
})

function clickHandler() {
  hello(props.text)
}
</script>
