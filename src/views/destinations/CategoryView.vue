<script setup>
import { ref } from 'vue';

import desinationsData from '@/data.json';

const destinations = ref(desinationsData.destinations);

</script>
<template>
    <h1>Available Destinations</h1>

    <div class="row g-3 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        <router-link v-for="destination in destinations" :key="destination.id"
            :to="`/destinations/${destination.slug}`" class="col">
            <h2>{{ destination.name }}</h2>
            <img :src="`/images/${destination.image}`" class="img-fluid" :alt="destination.name">
        </router-link>
    </div>

</template>