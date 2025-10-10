<script setup>
import { RouterView, useRoute } from 'vue-router'
import { watch, nextTick } from 'vue'

const route = useRoute()

watch(
  () => route.fullPath,
  async () => {
    await nextTick()

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
)
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
