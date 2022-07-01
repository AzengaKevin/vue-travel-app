<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import srcData from '@/data.json';
import { computed } from 'vue';

const destinations = computed(() => srcData.destinations);

</script>
<template>
  <header>
      <the-navigation :destinations="destinations" />
  </header>
  <div class="container py-4">
    <router-view :key="$route.path"></router-view>
  </div>
</template>