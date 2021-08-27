<template>
  <div>{{ msg }}</div>
</template>

<script setup lang="ts">
interface IProp {
  msg: string
}
withDefaults(defineProps<IProp>(), {
  msg: 'hi',
})
</script>
