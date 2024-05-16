<script setup lang="ts">
import { LinkListT } from '../../types/LinkList'

interface Props {
  data: LinkListT[]
}
const props = defineProps<Props>()
</script>

<template>
  <ul>
    <li
      v-for="(item, i) in props.data"
      :key="i"
      :class="{ active: item.active }"
    >
      <a :href="item.url">{{ item.text }}</a>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: nowrap;
  width: var(--w);
  height: var(--h);

  & li:hover,
  & li.active {
    color: #31c27c;
  }

  & a {
    padding: var(--p);
    color: inherit;
    text-decoration: inherit;
  }
}
</style>
