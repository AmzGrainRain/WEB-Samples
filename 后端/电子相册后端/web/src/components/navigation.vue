<script setup lang="ts"></script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">相册</RouterLink>
      </li>
      <li>
        <RouterLink to="/">标签</RouterLink>
      </li>
      <li>
        <RouterLink to="/">设置</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  margin: auto;
  padding: 0 1rem;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 1rem;

  width: fit-content;

  pointer-events: none;
}

nav ul {
  padding: 0.4rem;
  display: flex;

  list-style: none;
  border-radius: 0.8rem;
  background-color: #343434;
}

nav a {
  padding: 0.2rem 0.4rem;
  margin-right: 0.5rem;
  border-radius: 0.4rem;
  display: inline-block;
  background-color: #454545;
}

nav li:last-child a {
  margin-right: 0;
}
</style>
