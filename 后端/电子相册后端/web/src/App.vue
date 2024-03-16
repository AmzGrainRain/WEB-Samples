<script setup lang="ts">
import Navigation from './components/navigation.vue'

import { onMounted } from 'vue'
import { ThemeController } from './common/utils'

onMounted(() => {
  ThemeController.followSystem()
})
</script>

<template>
  <Navigation />
</template>

<style scoped></style>
