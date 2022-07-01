<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
</script>
<template>
  <header>
      <the-navigation />
  </header>
  <div class="container py-3">
    <router-view></router-view>
  </div>
</template>