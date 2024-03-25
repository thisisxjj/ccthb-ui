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
  variant: 'primary' |'success' | 'warning' | 'danger' | 'info'
}>(), {
  text: 'World',
})

function clickHandler() {
  hello(props.text)
}
</script>
