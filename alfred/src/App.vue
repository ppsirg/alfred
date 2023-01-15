<template>
  <Suspense>
    <template #default>
      <RouterView />
    </template>
    <template #fallback>
      loading
    </template>
  </Suspense>
</template>


<script async setup>
import { RouterLink, RouterView } from 'vue-router'
</script>