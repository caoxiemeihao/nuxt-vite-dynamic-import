<template>
  <div>
    {{ pkg }}
  </div>
</template>

<script setup>
// Works
// const pkg = await import('~/package.json').then((r) => r.default);

// Does not works with vite
const pkg = await import('~/' + 'package.json').then((r) => r.default);
</script>
