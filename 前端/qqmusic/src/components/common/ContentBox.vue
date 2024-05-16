<script setup lang="ts">
interface Props {
  title: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="content-box">
    <h2>{{ props.title }}</h2>
    <slot></slot>
  </div>
</template>

<style scoped>
.content-box {
  position: relative;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);

  & > h2 {
    padding: 24px 0;
    text-align: center;
    font-size: 30px;
    font-weight: normal;
    letter-spacing: 6px;
  }
}
</style>
