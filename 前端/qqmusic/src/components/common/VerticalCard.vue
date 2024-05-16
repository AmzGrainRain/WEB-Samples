<script setup lang="ts">
type Props = {
  title: string
  background?: string
}
const props = withDefaults(defineProps<Props>(), {
  background: '#fff'
})
</script>

<template>
  <div class="vertical-card" :style="{ background: props.background }">
    <h4>巅峰榜</h4>
    <h3>{{ props.title }}</h3>
  </div>
</template>

<style scoped>
.vertical-card {
  padding: 78px 30px 0 30px;
  width: 224px;
  height: 500px;
}
</style>
